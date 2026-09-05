type DoctorProps = {
  name: string;
  specialty: string;
  crm: string;
  rating: number;
  times: string[];
};

export default function DoctorCard({
  name,
  specialty,
  crm,
  rating,
  times,
}: DoctorProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex flex-col justify-between gap-6 md:flex-row">
        <div>
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-2xl">
            👨‍⚕️
          </div>

          <h3 className="text-xl font-semibold text-gray-900">{name}</h3>

          <p className="text-gray-500">{specialty}</p>

          <div className="mt-3 flex gap-3 text-sm text-gray-500">
            <span>⭐ {rating}</span>
            <span>{crm}</span>
          </div>
        </div>

        <div className="md:text-right">
          <p className="mb-3 text-sm font-medium text-gray-600">
            Horários disponíveis
          </p>

          <div className="flex flex-wrap gap-2 md:justify-end">
            {times.map((time) => (
              <button
                key={time}
                className="rounded-lg border px-3 py-2 text-sm text-gray-700 hover:border-blue-600 hover:text-blue-600"
              >
                {time}
              </button>
            ))}
          </div>

          <button className="mt-5 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">
            Agendar consulta
          </button>
        </div>
      </div>
    </div>
  );
}