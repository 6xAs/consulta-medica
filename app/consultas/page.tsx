import Header from "@/components/Header";
import DoctorCard from "@/components/DoctorCard";
import { doctors } from "@/data/doctors";

export default function ConsultasPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-blue-600">
            Agendamento
          </p>

          <h1 className="text-4xl font-bold text-gray-900">
            Encontre seu médico
          </h1>

          <p className="mt-3 text-gray-500">
            Pesquise médicos, especialidades e horários disponíveis.
          </p>
        </div>

        <div className="mb-8 rounded-2xl border bg-white p-5 shadow-sm">
          <div className="grid gap-4 md:grid-cols-3">
            <input
              type="text"
              placeholder="Buscar médico..."
              className="rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
            />

            <select className="rounded-xl border px-4 py-3 outline-none">
              <option>Todas as especialidades</option>
              <option>Cardiologia</option>
              <option>Dermatologia</option>
              <option>Clínico Geral</option>
            </select>

            <input
              type="date"
              className="rounded-xl border px-4 py-3 outline-none"
            />
          </div>
        </div>

        <div className="space-y-5">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              name={doctor.name}
              specialty={doctor.specialty}
              crm={doctor.crm}
              rating={doctor.rating}
              times={doctor.times}
            />
          ))}
        </div>
      </section>
    </main>
  );
}