import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="h-8 bg-slate-300" />
      <nav className="sticky top-0 z-50 bg-black">
        <div className="container px-6 py-3 ">
          <div className="flex items-center justify-center">
            <div>
              <Link
                className="text-2xl font-bold text-white transition-colors duration-300 transform lg:text-3xl"
                to="/"
              >
                Sample Project :: XYZ Engine
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-8 bg-slate-300" />
    </>
  );
}

export default Navbar;
