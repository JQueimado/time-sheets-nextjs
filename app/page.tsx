import KartingCenter from "./KartingCenter";
import TimeSheet from "./TimeSheet";

export default function Home() {
  return (
    <main>
      <div className="grid gap-4 grid-cols-3 content-evenly w-full p-3">
        <KartingCenter />
        <KartingCenter />
        <KartingCenter />
      </div>
    </main>
  );
}
