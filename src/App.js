import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/index";
import Mainpage from "./pages/Mainpage";

import RoadMap from "./pages/RoadMapPage";
import Result from "./pages/Result";
import Community from "./pages/Community";

import QuizPage from "./pages/QuziPage";
import TestCodePage from "./pages/TestCodePage"


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/roadmap" element={<RoadMap />} />
        <Route path="/result" element={<Result />} />
        <Route path="/community" element={<Community />} />
        <Route path="/quiz" element={<QuizPage/>} />
        <Route path="/testcode" element={<TestCodePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
