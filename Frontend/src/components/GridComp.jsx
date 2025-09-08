import React, { useState, useEffect } from "react";

const GridBackground = () => {
  const [columns, setColumns] = useState(12);

  const getColumns = () => {
    if (window.innerWidth < 640) return 4;
    if (window.innerWidth < 768) return 6;
    if (window.innerWidth < 1024) return 8;
    if (window.innerWidth < 1280) return 10;
    return 12;
  };

  useEffect(() => {
    const updateColumns = () => {
      setColumns(getColumns());
    };

    // Handle mobile viewport height
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    updateColumns();
    setVH();

    window.addEventListener("resize", updateColumns);
    window.addEventListener("resize", setVH);
    window.addEventListener("orientationchange", setVH);

    return () => {
      window.removeEventListener("resize", updateColumns);
      window.removeEventListener("resize", setVH);
      window.removeEventListener("orientationchange", setVH);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#F1EFED] -z-10">
      {/* Main container with max width and centered */}
      <div className="relative h-full max-w-[1440px] mx-auto">
        {/* Grid lines */}
        <div className="absolute inset-0 flex justify-between px-6 md:px-8 lg:px-12">
          {[...Array(columns)].map((_, i) => (
            <div
              key={i}
              className="h-full w-[2px] bg-[#151515] opacity-60"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, #E6E4E2 2%, #E6E4E2 98%, transparent 100%)",
              }}
            />
          ))}
        </div>

        {/* Subtle horizontal guides */}
        <div className="absolute inset-0">
          {/* Top margin guide */}
          <div className="absolute top-16 left-6 right-6 md:left-8 md:right-8 lg:left-12 lg:right-12 h-[1px] bg-[#E6E4E2] opacity-30" />

          {/* Bottom margin guide */}
          <div className="absolute bottom-16 left-6 right-6 md:left-8 md:right-8 lg:left-12 lg:right-12 h-[1px] bg-[#E6E4E2] opacity-30" />
        </div>
      </div>

      {/* Subtle paper texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
};

export default GridBackground;
