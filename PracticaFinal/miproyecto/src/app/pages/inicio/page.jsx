"use client";

import Header from "@/app/componentes/ui/Header";
import Menu from "@/app/componentes/ui/Menu";
import Footer from "@/app/componentes/ui/Footer";
import Image from "next/image";
import albaranImage from "@/app/images/albaran.png";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      {/* Cabecera y navegación */}
      <Header />
      <Menu />

      {/* Contenido principal */}
      <main className="flex-1 container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold leading-tight text-gray-800">
            Bienvenido al Gestor de Albaranes
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Organiza y gestiona tus clientes, proyectos y albaranes desde un único lugar.
            Simplifica tu trabajo y ahorra tiempo con nuestra herramienta eficiente y moderna.
          </p>
        </section>

        {/* Imagen destacada */}
        <div className="relative flex justify-center mb-12">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-300 to-blue-500 opacity-20 rounded-xl blur-xl"></div>
          <Image
            src={albaranImage}
            alt="Gestión de Albaranes"
            className="rounded-xl shadow-2xl"
            width={600}
            height={400}
            priority
          />
        </div>

        {/* Botones de navegación */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8">
            ¿Qué deseas gestionar hoy?
          </h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            <div className="group relative">
              <button
                onClick={() => window.location.href = "/pages/clientes"}
                className="bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg shadow-md transform transition-all duration-200 group-hover:scale-105"
              >
                Gestionar Clientes
              </button>
              <div className="absolute top-full left-0 w-full text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-2">
                Visualiza y administra todos tus clientes desde esta sección.
              </div>
            </div>
            <div className="group relative">
              <button
                onClick={() => window.location.href = "/pages/proyectos"}
                className="bg-green-600 text-white font-semibold py-4 px-8 rounded-lg shadow-md transform transition-all duration-200 group-hover:scale-105"
              >
                Gestionar Proyectos
              </button>
              <div className="absolute top-full left-0 w-full text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-2">
                Organiza y supervisa todos tus proyectos en un solo lugar.
              </div>
            </div>
            <div className="group relative">
              <button
                onClick={() => window.location.href = "/pages/albaranes"}
                className="bg-red-600 text-white font-semibold py-4 px-8 rounded-lg shadow-md transform transition-all duration-200 group-hover:scale-105"
              >
                Gestionar Albaranes
              </button>
              <div className="absolute top-full left-0 w-full text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-2">
                Crea y administra tus albaranes de manera eficiente.
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}
