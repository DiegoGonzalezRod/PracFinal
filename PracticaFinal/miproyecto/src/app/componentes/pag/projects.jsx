"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getProjects, deleteProject } from "@/app/api/apiProyect";
import { getClients } from "@/app/api/apiCliente";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [localProjects, setLocalProjects] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchProjectsAndClients = async () => {
      try {
        const [projectsData, clientsData] = await Promise.all([getProjects(), getClients()]);
        setProjects(projectsData);
        setClients(clientsData);

        const savedProjects = JSON.parse(localStorage.getItem("projectData")) || {};
        setLocalProjects(savedProjects);
      } catch (err) {
        setError("Error al obtener proyectos o clientes.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjectsAndClients();
  }, []);

  const getClientName = (clientId) => {
    const client = clients.find((c) => c._id === clientId);
    return client ? client.name : "Cliente no encontrado";
  };

  const handleDeleteProject = async (id) => {
    try {
      await deleteProject(id);
      setProjects((prevProjects) => prevProjects.filter((project) => project._id !== id));

      const updatedData = { ...localProjects };
      delete updatedData[id];
      setLocalProjects(updatedData);
      localStorage.setItem("projectData", JSON.stringify(updatedData));
      alert("Proyecto eliminado correctamente.");
    } catch (err) {
      alert("Error al eliminar el proyecto.");
    }
  };

  if (loading)
    return <div className="text-center text-gray-600">Cargando proyectos...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Gestión de Proyectos</h2>
        <button
          onClick={() => router.push("/pages/createProyect")}
          className="bg-blue-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-700 transition-all"
        >
          + Crear Proyecto
        </button>
      </div>
      {error && <p className="text-red-500 text-center mb-6">{error}</p>}
      {projects.length === 0 ? (
        <p className="text-center text-gray-600">No hay proyectos registrados.</p>
      ) : (
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="text-left py-4 px-6 text-gray-600">Nombre</th>
              <th className="text-left py-4 px-6 text-gray-600">Cliente</th>
              <th className="text-left py-4 px-6 text-gray-600">Estado</th>
              <th className="text-left py-4 px-6 text-gray-600">Fecha</th>
              <th className="text-left py-4 px-6 text-gray-600">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project._id} className="hover:bg-gray-50 border-b">
                <td className="py-4 px-6 text-gray-800">{project.name}</td>
                <td className="py-4 px-6 text-gray-800">
                  {getClientName(project.clientId)}
                </td>
                <td className="py-4 px-6 text-gray-800">
                  {localProjects[project._id]?.status || "No definido"}
                </td>
                <td className="py-4 px-6 text-gray-800">
                  {localProjects[project._id]?.fecha || "No definida"}
                </td>
                <td className="py-4 px-6">
                  <div className="flex space-x-4">
                    <button
                      onClick={() => router.push(`/pages/UpdateProyect/${project._id}`)}
                      className="text-green-600 hover:text-green-800"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => router.push(`/pages/proyectDetails/${project._id}`)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Detalles
                    </button>
                    <button
                      onClick={() => handleDeleteProject(project._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Borrar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Projects;
