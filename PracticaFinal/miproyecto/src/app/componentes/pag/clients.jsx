"use client";

import { useState, useEffect } from "react";
import { getClients, deleteClient } from "@/app/api/apiCliente";
import { useRouter } from "next/navigation";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const data = await getClients();
        setClients(data);
      } catch (err) {
        setError("Error al obtener los clientes.");
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  const handleDeleteClient = async (id) => {
    try {
      await deleteClient(id);
      setClients((prevClients) => prevClients.filter((client) => client._id !== id));
      alert("Cliente eliminado correctamente.");
    } catch (err) {
      alert("Error al eliminar el cliente.");
    }
  };

  const handleEditClient = (id) => {
    router.push(`/pages/UpdateClient/${id}`);
  };

  if (loading)
    return <div className="text-gray-500 text-center mt-6">Cargando clientes...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Gestión de Clientes</h1>
        <button
          onClick={() => router.push("/pages/createClient")}
          className="bg-blue-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-700 transition-all"
        >
          + Añadir Cliente
        </button>
      </div>
      {error && <p className="text-red-500 text-center mb-6">{error}</p>}
      {clients.length === 0 ? (
        <p className="text-gray-600 text-center">No hay clientes registrados.</p>
      ) : (
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="text-left py-4 px-6 text-gray-600">Nombre</th>
              <th className="text-left py-4 px-6 text-gray-600">CIF</th>
              <th className="text-left py-4 px-6 text-gray-600">Dirección</th>
              <th className="text-left py-4 px-6 text-gray-600">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client._id} className="hover:bg-gray-50 border-b">
                <td className="py-4 px-6 text-gray-800">{client.name}</td>
                <td className="py-4 px-6 text-gray-800">{client.cif}</td>
                <td className="py-4 px-6 text-gray-800">
                  {client.address.street} {client.address.number},{" "}
                  {client.address.city}, {client.address.province} ({client.address.postal})
                </td>
                <td className="py-4 px-6">
                  <button
                    onClick={() => handleEditClient(client._id)}
                    className="text-blue-600 hover:text-blue-800 mr-4"
                  >
                    Editar
                  </button>
                  <button
                      onClick={() => router.push(`/pages/clientDetails/${client._id}`)}
                       className="text-green-600 hover:text-green-800 mr-4"
                    >
                      Detalles
                    </button>
                  <button
                    onClick={() => handleDeleteClient(client._id)}
                    className="text-red-600 hover:text-red-800 mr-4"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Clients;
