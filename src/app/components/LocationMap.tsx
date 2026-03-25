import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    L: any;
  }
}

export function LocationMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);

  useEffect(() => {
    // Load Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
    document.head.appendChild(link);

    // Add z-index CSS to prevent map from appearing above header
    const style = document.createElement('style');
    style.textContent = `
      .leaflet-pane,
      .leaflet-control,
      .leaflet-popup,
      .leaflet-popup-pane {
        z-index: 10 !important;
      }
    `;
    document.head.appendChild(style);

    // Load Leaflet JS
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
    script.async = true;
    script.onload = () => {
      if (mapContainer.current && !map.current) {
        // Gurgaon coordinates: 28.4595° N, 77.0266° E
        const gurgaonLat = 28.4595;
        const gurgaonLng = 77.0266;

        map.current = window.L.map(mapContainer.current).setView(
          [gurgaonLat, gurgaonLng],
          15
        );

        window.L.tileLayer(
          'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19,
          }
        ).addTo(map.current);

        // Add marker for office location
        const marker = window.L.marker([gurgaonLat, gurgaonLng])
          .addTo(map.current)
          .bindPopup(
            '<div class="font-semibold text-gray-900">' +
            'RMR Headquarters<br/>' +
            'Office No 1511 15th floor<br/>' +
            'DLF Galleria Phase IV<br/>' +
            'Gurugram, Haryana Pin Code 122011' +
            '</div>',
            { maxWidth: 300 }
          )
          .openPopup();

        // Style the marker icon
        const defaultIcon = window.L.icon({
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41],
        });
        marker.setIcon(defaultIcon);
      }
    };
    document.head.appendChild(script);

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      className="w-full h-full rounded-lg relative"
      style={{ minHeight: '300px', zIndex: 0 }}
    />
  );
}
