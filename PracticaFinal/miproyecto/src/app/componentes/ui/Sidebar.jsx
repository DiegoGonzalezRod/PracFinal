"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* Botón para abrir/cerrar el Sidebar */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        
      >
        ☰
      </button>

      {/* Contenedor del Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-gray-800 to-gray-700 text-white w-64 shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="p-4 border-b border-gray-600 flex justify-between items-center">
          <h2 className="text-xl font-bold tracking-wide">Menú</h2>
          {/* Botón para cerrar el Sidebar */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            ✖
          </button>
        </div>
        <ul className="p-4 space-y-4">
          {/* Enlace a la página de inicio */}
          <li>
            <button
              onClick={() => {
                setIsOpen(false);
                router.push("/pages/inicio");
              }}
              className="block w-full text-left px-4 py-2 rounded-md text-gray-300 hover:bg-gray-600 hover:text-white transition duration-200"
            >
              Inicio
            </button>
          </li>
          {/* Enlace a la página de clientes */}
          <li>
            <button
              onClick={() => {
                setIsOpen(false);
                router.push("/pages/clientes");
              }}
              className="block w-full text-left px-4 py-2 rounded-md text-gray-300 hover:bg-gray-600 hover:text-white transition duration-200"
            >
              Clientes
            </button>
          </li>
          {/* Enlace a la página de proyectos */}
          <li>
            <button
              onClick={() => {
                setIsOpen(false);
                router.push("/pages/proyectos");
              }}
              className="block w-full text-left px-4 py-2 rounded-md text-gray-300 hover:bg-gray-600 hover:text-white transition duration-200"
            >
              Proyectos
            </button>
          </li>
          {/* Enlace a la página de albaranes */}
          <li>
            <button
              onClick={() => {
                setIsOpen(false);
                router.push("/pages/albaranes");
              }}
              className="block w-full text-left px-4 py-2 rounded-md text-gray-300 hover:bg-gray-600 hover:text-white transition duration-200"
            >
              Albaranes
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
