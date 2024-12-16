import Link from "next/link";
import Sidebar from "./Sidebar";

export default function Menu() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between shadow-md">
      {/* Sidebar para la navegación lateral */}
      <div className="flex items-center">
        <Sidebar />
      </div>

      {/* Enlaces principales */}
      <div className="flex space-x-4">
        <Link href="/pages/register">
          Registro
        </Link>
        <Link href="/pages/login">
          Login
        </Link>
      </div>

      {/* Enlace al perfil del usuario */}
      <div>
        <Link href="/pages/profile">
          Perfil
        </Link>
      </div>
    </nav>
  );
}
