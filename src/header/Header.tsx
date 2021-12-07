import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="p-12 px-32 flex justify-between content-center">
      <div className="text-4xl">Art by Maria</div>
      <div className="flex items-center">
        <Link to="/">Portfolio</Link>
        <Link to="/about" className="mx-6">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}
