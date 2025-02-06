import { useContext } from "react";
import PersonalCard from "./PersonalCard";
import HomePageRightColumn from "./HomePageRightColumn";
import PageContext from "../Context/GlobalContext";
import ContactsPage from "./ContactsPage";
import ProjectsPage from "./ProjectsPage";
import ToolsPage from "./ToolsPage";

export default function HomePage() {
  const { currentPage, setCurrentPage } = useContext(PageContext);

  if (currentPage === "contacts") {
    return <ContactsPage />;
  }
  if (currentPage === "home") {
    return (
      <div className="bg-slate-900  text-amber-50 pt-25">
        <div className="container mx-auto gap-10 flex flex-col xl:flex-row lg:items-stretch items-center  lg:flex-row  p-10">
          <PersonalCard className="animate-entryfromleft" />
          <HomePageRightColumn />
        </div>
      </div>
    );
  }
  if (currentPage === "tools") {
    return <ToolsPage />;
  }
  if (currentPage === "projects") {
    return <ProjectsPage />;
  }
}
