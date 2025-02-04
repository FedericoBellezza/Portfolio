import { useContext } from "react";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import PageContext from "../../Context/GlobalContext";
import ContactsPage from "../contactspage/ContactsPage";

export default function HomePage() {
  const { currentPage, setCurrentPage } = useContext(PageContext);

  if (currentPage === "contacts") {
    return <ContactsPage />;
  }
  if (currentPage === "home") {
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
}
