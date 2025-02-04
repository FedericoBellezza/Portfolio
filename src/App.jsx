import { BrowserRouter, Route, Routes } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/homepage/HomePage";
import ContactsPage from "./pages/contactspage/ContactsPage";
import ToolsPage from "./pages/toolspage/ToolsPage";
import ProjectsPage from "./pages/projectspage/ProjectsPage";
import PageContext from "./Context/GlobalContext";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="tools" element={<ToolsPage />} />
            <Route path="projects" element={<ProjectsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PageContext.Provider>
  );
}

export default App;
