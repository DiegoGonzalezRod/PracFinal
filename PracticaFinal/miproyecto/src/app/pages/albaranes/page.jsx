"use client";

import Image from "next/image";
import Header from "@/app/componentes/ui/Header";
import Menu from "@/app/componentes/ui/Menu";
import DeliveryNote from "@/app/componentes/pag/deliveryNote";

export default function AlbaranesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-6 shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight">Gestión de Albaranes</h1>
              <p className="text-gray-200 mt-2">
                Administra, visualiza y organiza todos tus albaranes con facilidad.
              </p>
            </div>
            <div>
              <Image
                src="/images/logo.png" // Ruta corregida
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
            <DeliveryNote />
          </section>
        </main>
      </div>
    </div>
  );
}
