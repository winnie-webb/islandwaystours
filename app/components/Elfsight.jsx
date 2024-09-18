"use client";
import { useEffect } from "react";

const ElfSightWidget = () => {
  useEffect(() => {
    // Add the script to the document
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute("data-use-service-core", "");
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="elfsight-app-e01baf2d-2d2c-4909-9fe3-f2559e5baa13"
      data-elfsight-app-lazy
    ></div>
  );
};

export default ElfSightWidget;
