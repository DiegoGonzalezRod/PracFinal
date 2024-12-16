"use client"; // Marca este archivo como un componente del lado del cliente

import CreateClientForm from "@/app/componentes/forms/CreateClientForm"; // Componente del formulario para crear cliente
import Header from "@/app/componentes/ui/Header";
import Menu from "@/app/componentes/ui/Menu";
import Footer from "@/app/componentes/ui/Footer";

export default function CreateClientPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Cabecera y navegación */}
      <Header />
      <Menu />

      {/* Contenido principal */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <section className="max-w-lg mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
            {/* Título y descripción */}
            <header className="p-8 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
              <h1 className="text-3xl font-bold text-center">Crear Nuevo Cliente</h1>
              <p className="text-center text-sm mt-2">
                Complete la información requerida para registrar un nuevo cliente en el sistema. Revise todos los campos antes de guardar.
              </p>
            </header>

            {/* Formulario */}
            <div className="p-6">
              <CreateClientForm />
            </div>
          </section>
        </div>
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}
