"use client";

import { useRouter } from "next/navigation";
import LoginForm from "@/app/componentes/forms/LoginForm";
import Header from "@/app/componentes/ui/Header";
import Menu from "@/app/componentes/ui/Menu";
import Footer from "@/app/componentes/ui/Footer";

export default function LoginPage() {
  const router = useRouter();

  const handleLoginSuccess = () => {
    router.push("/pages/inicio");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header y Menu */}
      <Header />
      <Menu />

      {/* Contenido principal */}
      <main className="flex-1 flex justify-center items-center p-6">
        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Iniciar Sesión
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Accede a tu cuenta para gestionar tus proyectos y albaranes de manera eficiente.
          </p>
          <LoginForm onSuccess={handleLoginSuccess} />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
