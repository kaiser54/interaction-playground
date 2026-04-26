import { useEffect } from "react";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import { ProgressiveBlueOverlay } from "@workspace/ui/components/progressive-blue-overlay";

import { Home } from "./pages/home";
import Footer from "./components/footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
])

function SeoHead() {
  useEffect(() => {
    const currentUrl = window.location.href;
    const canonicalHref = `${window.location.origin}/`;

    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalHref);

    const upsertMeta = (key: "name" | "property", value: string, content: string) => {
      let meta = document.head.querySelector(`meta[${key}='${value}']`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(key, value);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    upsertMeta("property", "og:url", currentUrl);
    upsertMeta("name", "twitter:url", currentUrl);
  }, []);

  return null;
}

function App() {
  return (
    <div className="pb-40 py-24">
      <ProgressiveBlueOverlay
        colorRgb="255 255 255"
        blur={8}
        height={200}
        gradientOpacity={0.3}
        maskOpacity={0.95}
        maskStop={55}
      />
      <SeoHead />
      <RouterProvider router={router} />
      {/* <AboutMe /> */}
      <Footer />
    </div>
  );
}

export default App;
