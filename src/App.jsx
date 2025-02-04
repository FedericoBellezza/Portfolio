import { BrowserRouter, Route, Routes } from "react-router";
import { useState } from "react";

// import layouts
import DefaultLayout from "./layouts/DefaultLayout";

// import HomePage
import HomePage from "./pages/HomePage";

// import Context
import PageContext from "./Context/GlobalContext";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PageContext.Provider>
  );
}

export default App;
