import {Link} from 'react-router-dom'
export default function Headers() {
  return (
    <div className="bg-slate-100">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold">Auth App</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/Home">
            <li>Home</li>
          </Link>
          <Link to="/About">
            <li>About</li>
          </Link>
          <Link to="/SignIn">
            <li>Sign In</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
