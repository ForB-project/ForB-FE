import { Route, Routes } from "react-router-dom";
import { Layout, MobileView } from "./components/index";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useMediaQuery } from "react-responsive";
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
} from "./pages";

function App(): JSX.Element {
  const queryClient = new QueryClient();
  const Desktop: boolean = useMediaQuery({ minWidth: 920 });
  const Mobile: boolean = useMediaQuery({ maxWidth: 919 });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Layout>
          {Desktop ? (
            <Routes>
              <Route path="/" element={<Mainpage />} />
              <Route path="/roadmap" element={<RoadMap />} />
              <Route path="/result" element={<Result />} />
              <Route path="/mypage" element={<Mypage />} />
              <Route path="/community" element={<Community />} />
              <Route path="/community/:id" element={<Detailpage />} />
              <Route
                path="/login/oauth2/code/google"
                element={<OAuthGoogle />}
              />
              <Route path="/oauth/callback/kakao" element={<OAuthKakao />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/testcode" element={<TestCodePage />} />
              <Route path="/message" element={<MessagePage />} />
              <Route path="/write" element={<WritePage />} />
              <Route path="/edit/:id" element={<EditPage />} />
            </Routes>
          ) : (
            ""
          )}
        </Layout>
        <ReactQueryDevtools />
      </QueryClientProvider>
      {Mobile ? <MobileView /> : ""}
    </>
  );
}

export default App;
