import { useEffect, useState } from "react";

const Navbar = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Change the navbar colors based on scroll position
  const bgColor = isAtTop ? "black" : "white";
  const textColor = isAtTop ? "white" : "black";

  return (
    <nav
      className="flex items-center justify-between"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        position: "fixed",
        width: "100%",
        transition: "background-color 0.5s ease, color 0.5s ease",
      }}
    >
      <div className="flex flex-shrink-0 items-center">
        {/* Split "ROBOT" and "STUDIO" into separate spans */}
        <h1 className="font-bold ml-40 text-xl">
          <span style={{ color: "#5D3FD3" }}>ROBOT</span>{" "}
          <span style={{ color: textColor }}>STUDIO</span>
        </h1>
      </div>
      <div className="mr-40 m-7 flex items-center justify-center gap-8 text-xs">
        <div>PROJECTS</div>
        <div>PUBLICATIONS</div>
        <div>PEOPLE</div>
        <div>NEWS</div>
        <div>OPPORTUNITIES</div>
      </div>
    </nav>
  );
};

export default Navbar;
