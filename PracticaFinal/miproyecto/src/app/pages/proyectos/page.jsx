"use client";

import Image from "next/image";
import Header from "@/app/componentes/ui/Header";
import Menu from "@/app/componentes/ui/Menu";
import Projects from "@/app/componentes/pag/projects";

export default function ProyectosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-6 shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight">Gestión de Proyectos</h1>
              <p className="text-gray-200 mt-2">
                Administra, visualiza y organiza todos tus proyectos de manera eficiente.
              </p>
            </div>
            <div>
              <Image
                src="/images/proyectos.png" // Ruta corregida
                alt="Logo"
                className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                width={48}
                height={48}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Menu */}
      <Menu />

      {/* Contenido Principal */}
      <div className="flex justify-center flex-1 p-6">
        <main className="bg-white shadow-lg rounded-lg w-full max-w-6xl p-8">
          {/* Contenido */}
          <section>
            <Projects />
          </section>
        </main>
      </div>
    </div>
  );
}
