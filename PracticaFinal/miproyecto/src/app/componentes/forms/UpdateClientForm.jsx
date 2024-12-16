"use client";

import { useForm } from "react-hook-form";
import { updateClient } from "@/app/api/apiCliente"; // Asegúrate de tener una función API para actualizar clientes
import { useRouter } from "next/navigation";

const UpdateClientForm = ({ client }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      ...client,
      street: client.address?.street || "",
      number: client.address?.number || "",
      city: client.address?.city || "",
      province: client.address?.province || "",
      postal: client.address?.postal || "",
    },
  });
  const router = useRouter();

  // Maneja el envío del formulario
  const onSubmit = async (data) => {
    try {
      const updatedClient = {
        ...data,
        address: {
          street: data.street,
          number: data.number,
          city: data.city,
          province: data.province,
          postal: data.postal,
        },
      };

      // Llama a la API para actualizar el cliente
      await updateClient(client._id, updatedClient);

      // Resetea el formulario y redirige a la página de clientes
      reset();
      router.push("/pages/clientes");
    } catch (err) {
      console.error("Error al actualizar el cliente:", err); // Manejo de errores
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Actualizar Cliente</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Input para el nombre del cliente */}
        <div>
          <label className="block text-gray-800">Nombre del Cliente</label>
          <input
            type="text"
            {...register("name", { required: "El nombre es obligatorio" })}
            className="w-full text-gray-800 rounded-md shadow-sm"
          />
        </div>

        {/* Input para el CIF */}
        <div>
          <label className="block text-gray-800">CIF</label>
          <input
            type="text"
            {...register("cif", { required: "El CIF es obligatorio" })}
            className="w-full text-gray-800 rounded-md shadow-sm"
          />
        </div>

        {/* Campos individuales para la dirección */}
        <div>
          <label className="block text-gray-800">Calle</label>
          <input
            type="text"
            {...register("street", { required: "La calle es obligatoria" })}
            className="w-full text-gray-800 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-800">Número</label>
          <input
            type="text"
            {...register("number", { required: "El número es obligatorio" })}
            className="w-full text-gray-800 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-800">Ciudad</label>
          <input
            type="text"
            {...register("city", { required: "La ciudad es obligatoria" })}
            className="w-full text-gray-800 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-800">Provincia</label>
          <input
            type="text"
            {...register("province", { required: "La provincia es obligatoria" })}
            className="w-full text-gray-800 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-800">Código Postal</label>
          <input
            type="text"
            {...register("postal", { required: "El código postal es obligatorio" })}
            className="w-full text-gray-800 rounded-md shadow-sm"
          />
        </div>

        {/* Botón de actualización */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Actualizar Cliente
        </button>
      </form>
    </div>
  );
};

export default UpdateClientForm;
