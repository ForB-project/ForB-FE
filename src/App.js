import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/index";
import Mainpage from "./pages/Mainpage";
import { QueryClient, QueryClientProvider } from "react-query";
import RoadMap from "./pages/RoadMapPage";
import Result from "./pages/Result";
import Community from "./pages/Community";
import OAuthpage from "./pages/OAuthpage";
import QuizPage from "./pages/QuziPage";
import TestCodePage from "./pages/TestCodePage"



function App() {
  const queryClient = new QueryClient();
  return (

<QueryClientProvider client={queryClient}>
    <Layout>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/roadmap" element={<RoadMap />} />
        <Route path="/result" element={<Result />} />
        <Route path="/community" element={<Community />} />
        <Route path="/oauth" element={<OAuthpage />} />
        <Route path="/quiz" element={<QuizPage/>} />
        <Route path="/testcode" element={<TestCodePage />} />
      </Routes>
    </Layout>
     </QueryClientProvider>

  );
}

export default App;
