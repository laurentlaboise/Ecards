import { Link } from "react-router";
import { Twitter, Linkedin, Instagram, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-24 pb-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 border-b border-gray-800 pb-16">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
               <div className="w-8 h-8 bg-[#FF6B00] rounded-lg flex items-center justify-center">
                 <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
               </div>
               <span className="font-extrabold tracking-tight text-xl">DIGITAL CARDS</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The #1 digital business card platform for teams and professionals.
            </p>
            <div className="flex gap-4">
               <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
               <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
               <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
             <div className="mt-8">
                <span className="text-xs font-bold text-[#FF6B00] tracking-wider uppercase mb-2 block">Backed By</span>
                <div className="bg-orange-600 w-8 h-8 flex items-center justify-center text-white font-bold text-xs rounded-sm">Y</div>
             </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="#" className="hover:text-[#FF6B00] transition-colors">Features</Link></li>
              <li><Link to="#" className="hover:text-[#FF6B00] transition-colors">Enterprise</Link></li>
              <li><Link to="#" className="hover:text-[#FF6B00] transition-colors">Pricing</Link></li>
              <li><Link to="#" className="hover:text-[#FF6B00] transition-colors">Case Studies</Link></li>
              <li><Link to="#" className="hover:text-[#FF6B00] transition-colors">Reviews</Link></li>
              <li><Link to="#" className="hover:text-[#FF6B00] transition-colors">DIGITAL CARDS for LLMs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="#" className="hover:text-[#FF6B00] transition-colors">Blog</Link></li>
              <li><Link to="#" className="hover:text-[#FF6B00] transition-colors">Help Center</Link></li>
              <li><Link to="#" className="hover:text-[#FF6B00] transition-colors">Webinars</Link></li>
              <li><Link to="#" className="hover:text-[#FF6B00] transition-colors">Developers</Link></li>
              <li><Link to="#" className="hover:text-[#FF6B00] transition-colors">Status</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="#" className="hover:text-[#FF6B00] transition-colors">About Us</Link></li>
              <li><Link to="#" className="hover:text-[#FF6B00] transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-[#FF6B00] transition-colors">Contact</Link></li>
              <li><Link to="#" className="hover:text-[#FF6B00] transition-colors">Partners</Link></li>
              <li><Link to="#" className="hover:text-[#FF6B00] transition-colors">Legal</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold mb-6">Get the App</h4>
             <div className="space-y-4">
                <button className="bg-gray-800 hover:bg-gray-700 w-full py-3 rounded-lg flex items-center justify-center gap-2 border border-gray-700 transition-colors">
                    <div className="text-left">
                        <div className="text-[10px] uppercase">Download on the</div>
                        <div className="text-sm font-bold">App Store</div>
                    </div>
                </button>
                 <button className="bg-gray-800 hover:bg-gray-700 w-full py-3 rounded-lg flex items-center justify-center gap-2 border border-gray-700 transition-colors">
                    <div className="text-left">
                        <div className="text-[10px] uppercase">Get it on</div>
                        <div className="text-sm font-bold">Google Play</div>
                    </div>
                </button>
             </div>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">© 2026 DIGITAL CARDS Inc. All rights reserved.</p>
             <div className="flex gap-8 text-sm text-gray-500">
                <Link to="#" className="hover:text-white">Privacy Policy</Link>
                <Link to="#" className="hover:text-white">Terms of Service</Link>
                <Link to="#" className="hover:text-white">Cookie Settings</Link>
             </div>
        </div>
      </div>
    </footer>
  );
}
