import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/index";
import Mainpage from "./pages/Mainpage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </Layout>
  );
}

export default App;
