import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/index";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  Mainpage,
  RoadMap,
  Result,
  Community,
  OAuthGoogle,
  OAuthKakao,
  QuizPage,
  TestCodePage,
} from "./pages";

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
          <Route path="/oauth/google" element={<OAuthGoogle />} />
          <Route path="/oauth/callback/kakao" element={<OAuthKakao />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/testcode" element={<TestCodePage />} />
        </Routes>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
