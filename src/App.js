import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/index";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  Mainpage,
  RoadMap,
  Result,
  Community,
  OAuthGoogle,
  OAuthKakao,
  QuizPage,
  TestCodePage,
  Mypage,
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
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/community" element={<Community />} />
          <Route path="/login/oauth2/code/google" element={<OAuthGoogle />} />
          <Route path="/oauth/callback/kakao" element={<OAuthKakao />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/testcode" element={<TestCodePage />} />
        </Routes>
      </Layout>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
