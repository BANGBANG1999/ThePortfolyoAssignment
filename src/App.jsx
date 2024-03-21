import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Home4 from "./pages/Home4";
import Page404 from "./components/404/Page404";
import BlogDetails from "./components/Blog/BlogDetails";
import Aos from "aos";
import "aos/dist/aos.css";
import Layout2 from "./components/Layout/Layout2";
import config from "./config/config";

function App() {
  const [apiRes, setApiRes] = useState(null);
  console.log(config.apiUrl);

  useEffect(() => {
    fetchData();
    Aos.init({ once: true });
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(config.apiUrl);
      const jsonData = await response.json();
      // console.log(jsonData.user.about.name);
      setApiRes(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout apiRes={apiRes} />}>
          <Route index element={<Home apiRes={apiRes} />} />
          <Route path="home-v3" element={<Home3 apiRes={apiRes} />} />
          <Route path="home-v4" element={<Home4 apiRes={apiRes} />} />
          <Route path="*" element={<Page404 />} />
          <Route
            path="blog/blog-details"
            element={<BlogDetails apiRes={apiRes} />}
          />
        </Route>
        <Route path="/home-v2" element={<Layout2 apiRes={apiRes} />}>
          <Route index element={<Home2 apiRes={apiRes} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
