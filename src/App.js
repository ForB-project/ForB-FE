import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import Mainpage from "./pages/Mainpage";
import RoadMap from "./pages/RoadMapPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/roadmap" element={<RoadMap />} />
      </Routes>
    </Layout>
  );
}

export default App;
