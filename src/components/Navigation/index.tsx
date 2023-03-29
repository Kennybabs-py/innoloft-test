import { NavLink, useLocation } from "react-router-dom";

export default function Navigation() {
  const { pathname } = useLocation();
  const activeLink = "text-[#272E71] font-bold";

  return (
    <aside
      className={`hidden lg:block px-5 py-6 w-[300px] min-h-[300px] shadow-xl`}
    >
      <nav
        className={`flex flex-col 
    items-start justify-start gap-5 w-full min-h-full`}
      >
        <NavLink
          to="/"
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? activeLink : "text-gray-700"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? activeLink : "text-gray-700"
          }
        >
          Products
        </NavLink>
      </nav>
    </aside>
  );
}
