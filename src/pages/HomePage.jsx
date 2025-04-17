import { useContext } from "react";
import PersonalCard from "./PersonalCard";
import HomePageRightColumn from "./HomePageRightColumn";
import PageContext from "../Context/GlobalContext";
import ContactsPage from "./ContactsPage";
import ProjectsPage from "./ProjectsPage";
import ToolsPage from "./ToolsPage";
import HomePageBottom from "./HomePageBottom";

export default function HomePage() {
  const { currentPage } = useContext(PageContext);

  if (currentPage === "contacts") {
    return <ContactsPage />;
  }
  if (currentPage === "home") {
    return (
      <div className="bg-slate-900  text-amber-50 pt-25">
        <div className="container mx-auto">
          <div className=" mx-auto flex gap-10 flex-col xl:flex-row lg:items-stretch items-center lg:px-15 p-5  lg:flex-row  py-10">
            <PersonalCard />
            <HomePageRightColumn />
          </div>
          <HomePageBottom />
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
