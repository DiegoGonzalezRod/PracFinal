"use client";

import { useState } from "react";
import RegisterForm from "@/app/componentes/forms/RegisterForm";
import ValidationForm from "@/app/componentes/forms/ValidationForm";
import Header from "@/app/componentes/ui/Header";
import Menu from "@/app/componentes/ui/Menu";
import Footer from "@/app/componentes/ui/Footer";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [token, setToken] = useState("");
  const router = useRouter();

  const handleRegistrationSuccess = (newToken) => {
    setIsRegistered(true);
    setToken(newToken);
  };

  const handleValidationSuccess = () => {
    router.push("/pages/inicio");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header y Menu */}
      <Header />
      <Menu />

      {/* Contenido Principal */}
      <main className="flex-1 flex justify-center items-center p-6">
        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg border border-gray-200">
          {!isRegistered ? (
            <>
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
                Crear una Cuenta
              </h2>
              <p className="text-gray-600 text-center mb-6">
                Regístrate para acceder a nuestra plataforma y gestionar tus proyectos.
              </p>
              <RegisterForm onSuccess={handleRegistrationSuccess} />
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
                Verificación de Correo
              </h2>
              <p className="text-gray-600 text-center mb-6">
                Por favor, verifica tu correo para completar el registro.
              </p>
              <ValidationForm token={token} onSuccess={handleValidationSuccess} />
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
