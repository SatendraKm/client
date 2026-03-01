import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Main/>} />
        <Route path="/05_module_c/*" element={<Layout/>} />
      </Routes>
    </>
  );
}

export default App;
