import { ReactNode } from "react";

interface lapData {
  time: String;
  delta: String;
  overall: String;
}

interface timeSheetData {
  date: String;
  bestLap: String;
  laps: lapData[];
}

const data: timeSheetData = {
  date: "12/03/2024",
  bestLap: "1.00.000",
  laps: [
    { time: "1.00.000", delta: "0", overall: "0" },
    { time: "2.00.000", delta: "+1.00.000", overall: "+1.00.000" },
  ],
};

export default async function TimeSheet() {
  return (
    <div className="overflow-x max-w-fit rounded-md bg-base-200">
      <table className="table">
        <tbody>
          <tr>
            <td>Date:</td>
            <td> {data.date} </td>
          </tr>
          <tr>
            <td>Best Lap:</td>
            <td>{data.bestLap}</td>
          </tr>
        </tbody>
      </table>
      <table className="table">
        <thead>
          <tr>
            <td>Lap time</td>
            <td>Delta</td>
            <td>Overall</td>
          </tr>
        </thead>
        <tbody>
          {data.laps.map((lap: lapData): ReactNode => {
            return (
              <tr>
                <td>{lap.time}</td>
                <td>{lap.delta}</td>
                <td>{lap.overall}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
