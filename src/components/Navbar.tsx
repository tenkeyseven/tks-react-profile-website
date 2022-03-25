import { Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/friend", label: "Friend" },
];

function NavLink({
  num,
  to,
  children,
}: {
  num: number;
  to: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative group">
      <span className="absolute -top-3 -left-4 text-xl font-thick italic text-gray-500 opacity-30 transition-all group-hover:opacity-60">
        {num}
      </span>
      <Link to={to}>{children}</Link>
    </div>
  );
}

export default function Navbar() {
  return (
    <nav className="px-16 py-8 bg-white flex items-center space-x-16 justify-end">
      {links.map(({ to, label }, i) => (
        <NavLink key={to} num={i + 1} to={to}>
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
