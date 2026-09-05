import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-blue-600">
          MedConnect
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-blue-600">
            Início
          </Link>

          <Link href="/consultas" className="hover:text-blue-600">
            Consultas
          </Link>

          <button className="rounded-full bg-gray-100 px-4 py-2">
            Anderson
          </button>
        </nav>
      </div>
    </header>
  );
}