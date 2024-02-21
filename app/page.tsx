import TimeSheet from "./TimeSheet";

export default function Home() {
  return (
    <main>
      <div>Page</div>
      <div className="grid gap-4 grid-cols-2">
        <TimeSheet />
        <TimeSheet />
        <TimeSheet />
      </div>
    </main>
  );
}
