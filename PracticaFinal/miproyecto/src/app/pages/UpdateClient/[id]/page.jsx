"use client";

import { useParams } from "next/navigation";
import UpdateClientForm from "@/app/componentes/forms/UpdateClientForm"; // Asegúrate de tener este formulario
import Header from "@/app/componentes/ui/Header";
import Menu from "@/app/componentes/ui/Menu";
import Footer from "@/app/componentes/ui/Footer";
import { getClientById } from "@/app/api/apiCliente"; // Asegúrate de tener esta función
import { useEffect, useState } from "react";

export default function UpdateClientPage() {
  const { id } = useParams(); // Extraer el ID de la URL dinámica
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) {
      console.error("No se encontró el ID en la URL.");
      setError("No se encontró el ID del cliente.");
      setLoading(false);
      return;
    }

    const fetchClient = async () => {
      try {
        console.log("ID recibido:", id); // Verifica el ID recibido
        const data = await getClientById(id); // Obtén los datos del cliente
        console.log("Cliente obtenido:", data); // Verifica los datos obtenidos
        setClient(data);
      } catch (err) {
        console.error("Error al obtener el cliente:", err);
        setError("Error al obtener los datos del cliente.");
      } finally {
        setLoading(false);
      }
    };

    fetchClient();
  }, [id]);

  if (loading) return <div>Cargando cliente...</div>;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <Menu />
      <main className="flex-1 container mx-auto p-6">
        <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Actualizar Cliente</h2>
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            client && <UpdateClientForm client={client} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
