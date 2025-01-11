import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/home";
import Blogs from "./features/Blogs/Blogs";
import ProtectedRoute from "./ui/ProtectedRoute";
import BlogDetailPage from "./pages/BlogDetail";
import CreateBlog from "./pages/CreateBlog";
import { DarkModeContextProvider } from "./contexts/DarkmodeContext";
import { BlogContextProvider } from "./contexts/BlogContext";
import { UserContextProvider } from "./contexts/UserContext";
import "./index.css";

function App() {
  return (
    <DarkModeContextProvider>
      <UserContextProvider>
        <BlogContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="blogs" element={<Blogs />} />
                <Route path="blogs/:id" element={<BlogDetailPage />} />
                <Route path="blog" element={<CreateBlog />} />
              </Route>
            </Routes>
          </BrowserRouter>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "12px" }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "#fff",
              },
            }}
          />
        </BlogContextProvider>
      </UserContextProvider>
    </DarkModeContextProvider>
  );
}

export default App;
