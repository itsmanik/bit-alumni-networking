import { ChevronFirst, ChevronLast } from "lucide-react";
import { createContext, useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  // Detect screen size using window.innerWidth
  const checkScreenSize = () => {
    if (window.innerWidth < 1024) { // Below 'lg' screen size (1024px)
      setExpanded(false); // Collapse the sidebar on small screens
    } else {
      setExpanded(true); // Keep sidebar expanded on large screens
    }
  };

  useEffect(() => {
    checkScreenSize(); // Check initial screen size when the component mounts

    // Add resize event listener to check screen size dynamically
    window.addEventListener('resize', checkScreenSize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      <aside className="h-screen relative lg:mt-12 shadow">
        <nav className="h-full flex flex-col bg-[#ffffff]">
          <div className="py-4 pb-2 flex justify-between p-2 items-center">
            <span
              className={`overflow-hidden transition-all ml-3 font-medium text-[#264653] ${
                expanded ? "w-15" : "hidden"
              }`}
            >
              Browse
            </span>
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg hover:bg-[#dedede] text-[#264653]"
            >
              {expanded ? (
                <ChevronFirst size={20} />
              ) : (
                <ChevronLast size={20} />
              )}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 p-1">{children}</ul>
          </SidebarContext.Provider>
        </nav>
      </aside>
    </>
  );
}

export function SidebarItem(props) {
  const { expanded } = useContext(SidebarContext);
  const [isActive, setIsActive] = useState(false);

  return (
    <NavLink
      to={props.location}
      className={({ isActive }) =>
        isActive ? setIsActive(true) : setIsActive(false)
      }
    >
      <li
        className={`relative flex items-center py-2 px-3 my-1 font-normal rounded-md cursor-pointer transition-colors group ${
          isActive
            ? "bg-[#3a843a] text-white"
            : "hover:bg-[#c8dbc8] text-[#264653]"
        }`}
        onClick={console.log("test")}
      >
        {props.icon}
        <span
          className={`overflow-hidden transition-all text-sm ${
            expanded ? "w-40 ml-3" : "w-0"
          }`}
        >
          {props.text}
        </span>

        {!expanded && (
          <div
            className={`absolute z-30 left-full rounded-md px-2 py-1 ml-6 bg-[#F4A261] text-[#264653] text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
          >
            {props.text}
          </div>
        )}
      </li>
    </NavLink>
  );
}
