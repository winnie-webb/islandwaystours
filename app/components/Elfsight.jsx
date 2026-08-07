"use client";
import { useEffect } from "react";

/**
 * Live review feed. The widget renders itself into the placeholder div once
 * Elfsight's platform script has loaded; the script is appended once and shared
 * by any instance on the page.
 */
const ElfSightWidget = () => {
  useEffect(() => {
    const SRC = "https://static.elfsight.com/platform/platform.js";
    if (document.querySelector(`script[src="${SRC}"]`)) return;

    const script = document.createElement("script");
    script.src = SRC;
    script.setAttribute("data-use-service-core", "");
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="elfsight-app-e01baf2d-2d2c-4909-9fe3-f2559e5baa13"
      data-elfsight-app-lazy
    ></div>
  );
};

export default ElfSightWidget;
