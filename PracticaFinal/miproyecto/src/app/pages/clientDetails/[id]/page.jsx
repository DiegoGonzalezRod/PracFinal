"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { getClientById } from "@/app/api/apiCliente"; // Asegúrate de tener esta función API
import { getProjects } from "@/app/api/apiProyect"; // Asegúrate de tener esta función API
import Header from "@/app/componentes/ui/Header";
import Menu from "@/app/componentes/ui/Menu";
import Footer from "@/app/componentes/ui/Footer";

const ClientDetailsPage = () => {
  const { id } = useParams(); // Obtener el ID del cliente desde la URL
  const [client, setClient] = useState(null); // Cliente obtenido de la API
  const [projects, setProjects] = useState([]); // Proyectos asociados al cliente
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchClientAndProjects = async () => {
      try {
        // Obtener datos del cliente
        console.log("Fetching client with ID:", id);
        const clientData = await getClientById(id);
        console.log("Client data fetched:", clientData);
        setClient(clientData);
      } catch (err) {
        console.error("Error al obtener los datos del cliente o proyectos:", err);
        setError("Error al obtener los datos del cliente o proyectos.");
      } finally {
        setLoading(false);
      }
    };

    fetchClientAndProjects();
  }, [id]);
  

  if (loading) return <div>Cargando datos del cliente...</div>;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <Menu />
      <main className="flex-1 container mx-auto p-6">
        <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Detalles del Cliente
          </h2>

          {error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            client && (
              <div className="space-y-4">
                <p className="text-gray-600">
                  <strong>Nombre:</strong> {client.name}
                </p>
                <p className="text-gray-600">
                  <strong>CIF:</strong> {client.cif || "No definido"}
                </p>
                <p className="text-gray-600">
                  <strong>Dirección:</strong> {client.address?.street}{" "}
                  {client.address?.number}, {client.address?.city},{" "}
                  {client.address?.province} ({client.address?.postal})
                </p>
              </div>
            )
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ClientDetailsPage;
