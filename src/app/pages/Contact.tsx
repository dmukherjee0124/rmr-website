import { MapPin, Mail, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { useState, FormEvent, useEffect } from "react";

export function Contact() {
  useEffect(() => {
    document.title = "Contact Us - RMR | Rathore Minerals & Resources";
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Sanitize input to prevent XSS and other malicious data
  const sanitizeInput = (input: string): string => {
    return input
      .replace(/[<>]/g, "") // Remove < and > to prevent HTML injection
      .trim()
      .slice(0, 1000); // Limit length to prevent abuse
  };

  // Validate email format
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate phone number (optional field, but if provided should be valid)
  const isValidPhone = (phone: string): boolean => {
    if (!phone) return true; // Optional field
    const phoneRegex = /^[+]?[\d\s()-]{10,}$/;
    return phoneRegex.test(phone);
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.phone && !isValidPhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    
    // Validate form
    if (!validateForm()) {
      setSubmitStatus("error");
      return;
    }

    // Sanitize all inputs
    const sanitizedData = {
      firstName: sanitizeInput(formData.firstName),
      lastName: sanitizeInput(formData.lastName),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone),
      company: sanitizeInput(formData.company),
      subject: sanitizeInput(formData.subject),
      message: sanitizeInput(formData.message),
    };
    
    // Create email body with line breaks
    const emailBody = `Name: ${sanitizedData.firstName} ${sanitizedData.lastName}\nEmail: ${sanitizedData.email}\nPhone: ${sanitizedData.phone || "Not provided"}\nCompany: ${sanitizedData.company || "Not provided"}\n\nMessage:\n${sanitizedData.message}`;

    // Create mailto link
    const recipient = "info@rmrgroup.in";
    const subject = encodeURIComponent(sanitizedData.subject);
    const body = encodeURIComponent(emailBody);
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
    
    // Open email client - try multiple methods for better compatibility
    try {
      // Method 1: Create and click an anchor element
      const anchor = document.createElement('a');
      anchor.href = mailtoLink;
      anchor.style.display = 'none';
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      
      // Show success message after a brief delay
      setTimeout(() => {
        setSubmitStatus("success");
      }, 500);
      
    } catch (error) {
      setSubmitStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value || "",
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#3D4539] to-[#2A2D26]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Get in touch with our team to discuss your mining and resource needs
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      className="w-full px-4 py-3 border border-[#C9A961] focus:border-[#3D4539] focus:outline-none focus:ring-2 focus:ring-[#3D4539] focus:ring-offset-1 transition-colors rounded"
                      placeholder="John"
                      name="firstName"
                      value={formData.firstName}
                      required
                      onChange={handleChange}
                      aria-invalid={errors.firstName ? "true" : "false"}
                      aria-describedby={errors.firstName ? "firstName-error" : undefined}
                    />
                    {errors.firstName && (
                      <p id="firstName-error" className="text-red-500 text-sm mt-1" role="alert">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      className="w-full px-4 py-3 border border-[#C9A961] focus:border-[#3D4539] focus:outline-none focus:ring-2 focus:ring-[#3D4539] focus:ring-offset-1 transition-colors rounded"
                      placeholder="Doe"
                      name="lastName"
                      value={formData.lastName}
                      required
                      onChange={handleChange}
                      aria-invalid={errors.lastName ? "true" : "false"}
                      aria-describedby={errors.lastName ? "lastName-error" : undefined}
                    />
                    {errors.lastName && (
                      <p id="lastName-error" className="text-red-500 text-sm mt-1" role="alert">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 border border-[#C9A961] focus:border-[#3D4539] focus:outline-none focus:ring-2 focus:ring-[#3D4539] focus:ring-offset-1 transition-colors rounded"
                    placeholder="john.doe@company.com"
                    name="email"
                    value={formData.email}
                    required
                    onChange={handleChange}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full px-4 py-3 border border-[#C9A961] focus:border-[#3D4539] focus:outline-none focus:ring-2 focus:ring-[#3D4539] focus:ring-offset-1 transition-colors rounded"
                    placeholder="+91 98765 43210"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    aria-invalid={errors.phone ? "true" : "false"}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-red-500 text-sm mt-1" role="alert">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    className="w-full px-4 py-3 border border-[#C9A961] focus:border-[#3D4539] focus:outline-none focus:ring-2 focus:ring-[#3D4539] focus:ring-offset-1 transition-colors rounded"
                    placeholder="Your Company Name"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-4 py-3 border border-[#C9A961] focus:border-[#3D4539] focus:outline-none focus:ring-2 focus:ring-[#3D4539] focus:ring-offset-1 transition-colors rounded"
                    placeholder="Project Inquiry"
                    name="subject"
                    value={formData.subject}
                    required
                    onChange={handleChange}
                    aria-invalid={errors.subject ? "true" : "false"}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-red-500 text-sm mt-1" role="alert">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-[#C9A961] focus:border-[#3D4539] focus:outline-none focus:ring-2 focus:ring-[#3D4539] focus:ring-offset-1 transition-colors resize-none rounded"
                    placeholder="Tell us about your project requirements..."
                    name="message"
                    value={formData.message}
                    required
                    onChange={handleChange}
                    aria-invalid={errors.message ? "true" : "false"}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  ></textarea>
                  {errors.message && (
                    <p id="message-error" className="text-red-500 text-sm mt-1" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#3D4539] text-white px-8 py-4 hover:bg-[#2A2D26] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3D4539] focus:ring-offset-2 rounded"
                >
                  Send Message
                </button>
              </form>

              {/* Submit Status */}
              {submitStatus === "success" && (
                <div className="mt-4 p-4 bg-green-100 border border-green-200 rounded flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-600 flex-shrink-0" />
                  <p className="text-green-800">
                    Your email client has been opened with your message. Please check your email application to send your inquiry to info@rmrgroup.in
                  </p>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mt-4 p-4 bg-red-100 text-red-800 rounded">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-2">Please check your form inputs and try again.</p>
                      <p className="text-sm">Make sure all required fields are filled correctly.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl text-gray-900 mb-6">Contact Information</h2>
              <p className="text-lg text-gray-600 mb-8">
                Reach out to us directly through any of the following channels.
              </p>

              <div className="space-y-8">
                {/* Head Office */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F5F3EF] border border-[#C9A961] flex items-center justify-center text-[#3D4539]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900 mb-2">Head Office</h3>
                    <p className="text-gray-600">
                      Unit 402C, 4th Floor Magnum Tower 1,<br />
                      Golf Course Extension, Sector 58<br />
                      Gurgaon, Haryana 122011
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F5F3EF] border border-[#C9A961] flex items-center justify-center text-[#3D4539]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@rmrgroup.in" className="hover:text-[#3D4539]">
                        info@rmrgroup.in
                      </a>
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#F5F3EF] border border-[#C9A961] flex items-center justify-center text-[#3D4539]">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900 mb-2">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Other Sites */}
              <div className="mt-12 p-6 bg-[#F5F3EF] border border-[#C9A961]">
                <h3 className="text-xl text-gray-900 mb-4">Other Sites</h3>
                <p className="text-gray-600">
                  We have operations in multiple states across India:
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>• Haryana</li>
                  <li>• Andhra Pradesh</li>
                  <li>• Goa</li>
                  <li>• Odisha</li>
                  <li>• Maharashtra</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-[#F5F3EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#C9A961] p-8">
            <h2 className="text-3xl text-gray-900 mb-6 text-center">Find Us</h2>
            <div className="aspect-video bg-gradient-to-br from-[#3D4539] to-[#2A2D26] flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-xl">Map Integration Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
