import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/index";
import Mainpage from "./pages/Mainpage";
import Result from "./pages/Result";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Layout>
  );
}

export default App;
