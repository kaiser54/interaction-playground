import { useEffect } from "react";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";

import { Home } from "./pages/home";

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
    <div className="pb-40">
      <SeoHead />
      <RouterProvider router={router} />
      <section className="container-wrapper space-y-4 w-full p-4">
        <h2 className="text-sm font-medium text-default">Get in touch</h2>
        <p className="text-sm text-neutral">I'm always looking for new opportunities and collaborations. Feel free to reach out to me via email or LinkedIn.</p>
        <div className="pt-2 space-y-2 text-sm text-neutral flex items-center gap-4">
          <a className="mb-0 p-1 cursor-pointer hover:underline" href="mailto:temitope@posthearts.com">
            Gmail
          </a>
          <a
            className="mb-0 p-1 cursor-pointer hover:underline"
            href="https://www.linkedin.com/in/temitope-agboola/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="mb-0 p-1 cursor-pointer hover:underline"
            href="https://github.com/temitope-agboola"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="mb-0 p-1 cursor-pointer hover:underline"
            href="https://x.com/temitope_agboola"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
