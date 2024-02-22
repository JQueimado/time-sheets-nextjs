const data = {
  id: "1",
  name: "Kartodromo de Evora",
  sheets: [
    { driver: "Obom", date: "12/03/2024", bestLap: "1.00.000" },
    { driver: "Obom", date: "13/03/2024", bestLap: "2.00.000" },
    { driver: "Obom", date: "14/03/2024", bestLap: "3.00.000" },
  ],
};

export default function KartingCenter() {
  return (
    <a
      className="overflow-x justify-self-center max-w-fit rounded-md outline outline-2 outline-offset-1 outline-neutral bg-base-200 hover:bg-base-100"
      href={`/kartingcenter/${data.id}`}
    >
      <h3 className="text-center font-bold p-1">{data.name}</h3>
      <table className="table">
        <thead>
          <tr>
            <td>Nº</td>
            <td>Best Lap</td>
            <td>Driver</td>
            <td>Date</td>
          </tr>
        </thead>
        <tbody>
          {data.sheets.map((sheet, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{sheet.bestLap}</td>
              <td>{sheet.driver}</td>
              <td>{sheet.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </a>
  );
}
