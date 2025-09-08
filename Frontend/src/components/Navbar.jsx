import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [time, setTime] = useState(new Date());
  const [locationName, setLocationName] = useState("India");

  // nav timing
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  // nav location fetch
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await res.json();
            setLocationName(
              data.address.city ||
                data.address.town ||
                data.address.village ||
                data.address.state ||
                "Unknown location"
            );
            localStorage.setItem(
              "User Location",
              data.address.city ||
                data.address.town ||
                data.address.village ||
                data.address.state ||
                "Unknown location"
            );
          } catch (error) {
            setLocationName("Unable to get location");
          }
        },
        () => {
          setLocationName("Permission denied");
        }
      );
    } else {
      setLocationName("Geolocation not supported");
    }
  }, []);

  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:pb-0 md:pb-0 py-4">
      <div className="flex justify-between items-center">
        {/* Left Logo */}
        <NavLink to="/">
          <p className="text-[18px] sm:text-[20px] text-[#151515] font-bold">
            Bholasankar
          </p>
        </NavLink>

        <nav className="flex justify-center items-center gap-4 md:gap-8">
          <NavLink
            to="/about"
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 
            after:h-[2px] after:w-full after:bg-black after:origin-right after:scale-x-0 
            after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100"
          >
            <p className="text-[16px] md:text-[18px] text-[#151515] font-medium">
              About
            </p>
          </NavLink>
          <NavLink
            to="/projects"
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 
            after:h-[2px] after:w-full after:bg-black after:origin-right after:scale-x-0 
            after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100"
          >
            <p className="text-[16px] md:text-[18px] text-[#151515] font-medium">
              Projects
            </p>
          </NavLink>
          <NavLink
            to="/contact"
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 
            after:h-[2px] after:w-full after:bg-black after:origin-right after:scale-x-0 
            after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100"
          >
            <p className="text-[16px] md:text-[18px] text-[#151515] font-medium">
              Contact
            </p>
          </NavLink>
        </nav>

        <div className="hidden md:flex justify-center items-center gap-2">
          <p className="text-[16px] md:text-[18px] text-[#151515] font-medium">
            {locationName}
          </p>
          <span className="text-[16px] md:text-[18px] text-[#151515] font-medium">
            *
          </span>
          <p className="text-[16px] md:text-[18px] text-[#151515] font-medium">
            {time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
      <div className="w-full border-b-2 border-[#151515] mt-4"></div>
    </section>
  );
};

export default Navbar;
