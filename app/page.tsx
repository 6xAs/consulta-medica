import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium text-blue-600">
            Bem-vindo de volta
          </p>

          <h1 className="text-4xl font-bold text-gray-900">
            Olá, Anderson 👋
          </h1>

          <p className="mt-3 text-lg text-gray-500">
            Como podemos cuidar de você hoje?
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/consultas"
            className="rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 text-4xl">📅</div>

            <h2 className="text-xl font-semibold text-gray-900">
              Agendar consulta
            </h2>

            <p className="mt-2 text-gray-500">
              Encontre médicos e horários disponíveis.
            </p>
          </Link>

          <div className="rounded-2xl border bg-white p-7 shadow-sm">
            <div className="mb-4 text-4xl">🔎</div>

            <h2 className="text-xl font-semibold text-gray-900">
              Buscar especialidade
            </h2>

            <p className="mt-2 text-gray-500">
              Cardiologia, dermatologia, clínica geral e muito mais.
            </p>
          </div>
        </div>

        <section className="mt-12">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              Próxima consulta
            </h2>

            <Link
              href="/consultas"
              className="text-sm font-medium text-blue-600"
            >
              Ver consultas
            </Link>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                  Confirmada
                </span>

                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  Dr. Carlos Mendes
                </h3>

                <p className="text-gray-500">Cardiologista</p>

                <p className="mt-4 font-medium text-gray-700">
                  08 de setembro • 14:30
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Consulta presencial
                </p>
              </div>

              <button className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">
                Ver detalhes
              </button>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="mb-5 text-2xl font-bold text-gray-900">
            Especialidades
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ["❤️", "Cardiologia"],
              ["🧠", "Neurologia"],
              ["👁️", "Oftalmologia"],
              ["🦴", "Ortopedia"],
            ].map(([icon, name]) => (
              <div
                key={name}
                className="rounded-2xl border bg-white p-5 text-center shadow-sm"
              >
                <div className="mb-3 text-3xl">{icon}</div>

                <p className="font-medium text-gray-700">{name}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}