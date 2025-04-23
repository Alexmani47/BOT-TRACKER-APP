import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          Bot Tracker
        </h1>
        <ul className="flex gap-6">
          <li>
            <Link to="/" className="hover:underline hover:text-blue-200 transition duration-200">
              All Bots
            </Link>
          </li>
          <li>
            <Link to="/add" className="hover:underline hover:text-blue-200 transition duration-200">
              Add Trade
            </Link>
          </li>
          <li>
            <Link to="/summary" className="hover:underline hover:text-blue-200 transition duration-200">
              Summary
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
