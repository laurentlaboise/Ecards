import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F5EDE4]/80 backdrop-blur-md border-b border-white/20 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FF6B00] rounded-lg flex items-center justify-center">
             <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
          </div>
          <span className="text-gray-900 font-extrabold tracking-tight">DIGITAL CARDS</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {["Features", "Enterprise", "Pricing", "Resources"].map((item) => (
            <Link
              key={item}
              to="#"
              className="text-gray-600 hover:text-[#FF6B00] font-medium transition-colors text-sm"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="#"
            className="text-gray-900 font-semibold text-sm hover:text-[#FF6B00] transition-colors"
          >
            Log in
          </Link>
          <button className="bg-[#FF6B00] hover:bg-[#E65100] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-0.5">
            Get started
          </button>
        </div>

        <button
          className="md:hidden text-gray-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#F5EDE4] border-b border-gray-200 p-6 md:hidden flex flex-col gap-4 shadow-xl">
          {["Features", "Enterprise", "Pricing", "Resources"].map((item) => (
            <Link
              key={item}
              to="#"
              className="text-gray-800 font-medium py-2 border-b border-gray-100"
            >
              {item}
            </Link>
          ))}
          <div className="flex flex-col gap-4 mt-4">
            <Link to="#" className="text-center font-semibold py-2">
              Log in
            </Link>
            <button className="bg-[#FF6B00] text-white w-full py-3 rounded-full font-bold">
              Get started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
