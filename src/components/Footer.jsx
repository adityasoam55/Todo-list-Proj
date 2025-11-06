import React from "react";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white border-t shadow-sm py-3 text-center text-gray-600 text-sm">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-600 font-semibold">Aditya Som</span>. All
        rights reserved.
      </p>
      <p className="mt-1 text-xs">
        Built with <span className="text-blue-500 font-medium">React</span> &{" "}
        <span className="text-sky-400 font-medium">Tailwind CSS</span>.
      </p>
    </footer>
  );
}

export default Footer;
