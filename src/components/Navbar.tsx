import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="px-16 py-4 bg-white flex items-center space-x-4 justify-end">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/friend">Friend</Link>
    </nav>
  )
}
