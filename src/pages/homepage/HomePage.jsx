import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

export default function HomePage() {
  return (
    <div className="bg-slate-900  text-amber-50 pt-25">
      {/* container */}
      <div className="container mx-auto flex flex-col xl:flex-row  py-10 ">
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  );
}
