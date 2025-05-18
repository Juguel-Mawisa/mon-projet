import { Link } from 'react-router-dom'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-end gap-4">
      <Link to="/" className="hover:underline">Accueil</Link>
      <Link to="/contact" className="hover:underline">Contact</Link>
    </nav>
  )
}