import { useContext } from "react";
import PersonalCard from "./PersonalCard";
import HomePageRightColumn from "./HomePageRightColumn";
import PageContext from "../Context/GlobalContext";
import ContactsPage from "./ContactsPage";

export default function HomePage() {
  const { currentPage, setCurrentPage } = useContext(PageContext);

  if (currentPage === "contacts") {
    return <ContactsPage />;
  }
  if (currentPage === "home") {
    return (
      <div className="bg-slate-900  text-amber-50 pt-25">
        <div className="container mx-auto flex flex-col xl:flex-row  py-10 ">
          <PersonalCard className="animate-entryfromleft" />
          <HomePageRightColumn />
        </div>
      </div>
    );
  }
}
