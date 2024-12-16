"use client";

import { useEffect, useState } from "react";
import {
  getDeliveryNotes,
  deleteDeliveryNote,
  downloadDeliveryNotePDF,
} from "@/app/api/apiDeliveryNote";
import { useRouter } from "next/navigation";

const DeliveryNote = () => {
  const [deliveryNotes, setDeliveryNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchDeliveryNotes = async () => {
      try {
        const data = await getDeliveryNotes();
        setDeliveryNotes(data);
      } catch (err) {
        setError("Error al obtener los albaranes.");
      } finally {
        setLoading(false);
      }
    };

    fetchDeliveryNotes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDeliveryNote(id);
      setDeliveryNotes((prev) => prev.filter((note) => note._id !== id));
      alert("Albarán eliminado correctamente.");
    } catch (err) {
      alert("Error al eliminar el albarán.");
    }
  };

  const handleDownloadPDF = async (id) => {
    try {
      const pdfBlob = await downloadDeliveryNotePDF(id);
      const link = document.createElement("a");
      link.href = URL.createObjectURL(pdfBlob);
      link.download = `Albaran_${id}.pdf`;
      link.click();
    } catch (err) {
      alert("Error al descargar el PDF del albarán.");
    }
  };

  if (loading)
    return <div className="text-center text-gray-500">Cargando albaranes...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Gestión de Albaranes</h2>
        <button
          onClick={() => router.push("/pages/createDeliveryNote")}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all"
        >
          + Crear Albarán
        </button>
      </div>
      {error && <p className="text-red-500 text-center mb-6">{error}</p>}
      {deliveryNotes.length === 0 ? (
        <p className="text-center text-gray-500">No hay albaranes registrados.</p>
      ) : (
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="text-left py-4 px-6 text-gray-600">Descripción</th>
              <th className="text-left py-4 px-6 text-gray-600">Proyecto</th>
              <th className="text-left py-4 px-6 text-gray-600">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {deliveryNotes.map((note) => (
              <tr key={note._id} className="hover:bg-gray-50 border-b">
                <td className="py-4 px-6 text-gray-800">{note.description || "Sin descripción"}</td>
                <td className="py-4 px-6 text-gray-800">
                  {note.projectId?.name || "Proyecto no encontrado"}
                </td>
                <td className="py-4 px-6">
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleDelete(note._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Eliminar
                    </button>
                    <button
                      onClick={() => handleDownloadPDF(note._id)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Descargar PDF
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

export default DeliveryNote;
