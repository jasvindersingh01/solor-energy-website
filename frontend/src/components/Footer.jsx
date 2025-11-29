export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-16">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h3 className="text-xl font-semibold mb-2">
          Aster's Energy
        </h3>
        <p className="text-gray-300 text-sm">
          Plot No. 1, Adinath Nagar, Devli Arab Road, Kota, Rajasthan
        </p>
        <p className="text-gray-300 text-sm mt-1">
          Phone: <a href="tel:9351055571" className="text-yellow-300">9351055571</a>
        </p>

        <p className="text-gray-400 text-sm mt-4">
          © {new Date().getFullYear()} Our Solar Energies. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
