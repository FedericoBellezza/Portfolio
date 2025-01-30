import LeftColumn from "./leftcolumn";
import RightColumn from "./RightColumn";

export default function HomePage() {
  return (
    <div className="bg-slate-900  text-amber-50">
      {/* container */}
      <div className="container mx-auto flex py-10 ">
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  );
}
