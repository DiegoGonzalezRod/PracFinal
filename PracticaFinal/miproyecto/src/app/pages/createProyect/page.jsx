"use client";

import CreateProyectForm from '@/app/componentes/forms/CreateProyectForm'; // El formulario para crear proyecto
import Header from '@/app/componentes/ui/Header';
import Menu from '@/app/componentes/ui/Menu';
import Footer from '@/app/componentes/ui/Footer';

export default function CreateProyectPage() {
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
              <h1 className="text-3xl font-bold text-center">Crear Nuevo Proyecto</h1>
              <p className="text-center text-sm mt-2">
                Complete los campos necesarios para registrar un nuevo proyecto. Asegúrese de verificar los datos antes de guardarlos.
              </p>
            </header>

            {/* Formulario */}
            <div className="p-6">
              <CreateProyectForm />
            </div>
          </section>
        </div>
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}
