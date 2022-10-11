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
  Detailpage,
  MessagePage,
  WritePage,
  EditPage,
  SocketPage
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
          <Route path="/community/:id" element={<Detailpage />} />
          <Route path="/login/oauth2/code/google" element={<OAuthGoogle />} />
          <Route path="/oauth/callback/kakao" element={<OAuthKakao />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/testcode" element={<TestCodePage />} />
          <Route path="/message" element={<MessagePage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="/socket" element={<SocketPage />} />
        </Routes>
      </Layout>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
