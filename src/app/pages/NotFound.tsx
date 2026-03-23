import { Link } from "react-router";
import { routes } from "../routes";
import { useEffect } from "react";

export function NotFound() {
  useEffect(() => {
    document.title = "404 Not Found - RMR | Rathore Minerals & Resources";
  }, []);

  return (
    <div>
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-9xl font-bold text-[#C9A961] mb-4">
            404
          </div>
          <h1 className="text-4xl text-gray-900 mb-4 font-bold">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to={routes.HOME}>
              <button className="px-8 py-3 bg-[#3D4539] text-white font-semibold rounded-lg hover:bg-[#2d3428] transition-colors">
                Go to Home
              </button>
            </Link>
            <Link to={routes.CONTACT}>
              <button className="px-8 py-3 bg-[#C9A961] text-[#3D4539] font-semibold rounded-lg hover:bg-[#B8954D] transition-colors">
                Contact Support
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
