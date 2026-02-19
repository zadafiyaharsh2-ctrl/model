import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-xl border-b border-gray-800">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl hover:scale-105 transition-transform">
            <span className="text-2xl gradient-text">⚡</span>
            <span>PriorityAI</span>
          </Link>
          
          <div className="flex items-center gap-8">
            <a href="/#features" className="hidden md:block text-gray-400 hover:text-white font-medium transition-colors relative group">
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all"></span>
            </a>
            <a href="/#how-it-works" className="hidden md:block text-gray-400 hover:text-white font-medium transition-colors relative group">
              How It Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all"></span>
            </a>
            <a href="/#about" className="hidden md:block text-gray-400 hover:text-white font-medium transition-colors relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all"></span>
            </a>
            {localStorage.getItem('token') ? (
              <Link to="/dashboard" className="btn btn-primary text-sm px-5 py-2.5">Dashboard</Link>
            ) : (
              <>
                <Link to="/login" className="btn btn-secondary text-sm px-5 py-2.5">Login</Link>
                <Link to="/signup" className="btn btn-primary text-sm px-5 py-2.5">Get Started</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
