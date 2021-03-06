import { Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery ", label: "Gallery" },
  { to: "/friend", label: "Friends" },
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
    <header className="flex items-center justify-between">
      <a className='font-serif text-xl font-bold ml-4 text-slate-500' href="/">@TenkeySeven</a>
      <nav className="px-8 py-4 flex items-center space-x-16 justify-start text-gray-500">
        {links.map(({ to, label }, i) => (
          <NavLink key={to} num={i + 1} to={to}>
            {label}
          </NavLink>
        ))}
      </nav>


    </header>
  );
}
