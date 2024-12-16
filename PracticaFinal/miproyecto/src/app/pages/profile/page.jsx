"use client";

import { useEffect, useState } from "react";
import { getUserProfile, deleteUser } from "@/app/api/apiOnboarding";
import Header from "@/app/componentes/ui/Header";
import Menu from "@/app/componentes/ui/Menu";
import Footer from "@/app/componentes/ui/Footer";

export default function ProfilePage() {
  const [user, setUser] = useState(null); // Almacenamos los datos del usuario
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(""); // Estado de error
  const [deleteError, setDeleteError] = useState(""); // Error al eliminar usuario

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profileData = await getUserProfile();
        setUser(profileData); // Guardamos los datos del usuario
        console.log("ID del Usuario:", profileData._id); // Mostramos el ID del usuario en consola
      } catch (err) {
        setError("Error al obtener el perfil");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile(); // Llamamos a la API cuando el componente se monta
  }, []);

  // Manejar eliminación del usuario
  const handleDeleteUser = async () => {
    try {
      await deleteUser(); // Llama a la API para eliminar al usuario
      alert("Usuario eliminado correctamente");
      localStorage.removeItem("jwt"); // Elimina el token de localStorage
      window.location.href = "/"; // Redirige al inicio
    } catch (err) {
      setDeleteError(err.message || "Error al eliminar el usuario");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-lg font-medium text-gray-600">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <Menu />
      <main className="flex-1 container mx-auto flex justify-center items-center p-6">
        <div className="w-full max-w-lg bg-white p-8 shadow-lg rounded-lg border border-gray-200">
          {error ? (
            <p className="text-red-500 text-center font-medium">{error}</p>
          ) : (
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 text-center mb-6">
                Perfil del Usuario
              </h2>
              {user && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Email:</span>
                    <span className="text-gray-800">{user.email}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Fecha de Registro:</span>
                    <span className="text-gray-800">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              )}
              {/* Botón para eliminar usuario */}
              <button
                onClick={handleDeleteUser}
                className="mt-8 w-full bg-red-600 text-white py-3 rounded-lg font-medium shadow hover:bg-red-700 transition focus:outline-none focus:ring focus:ring-red-300"
              >
                Eliminar Usuario
              </button>
              {deleteError && (
                <p className="text-red-500 mt-4 text-center">{deleteError}</p>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
