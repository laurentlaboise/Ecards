import { motion } from "motion/react";
import { ArrowRight, Star, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 z-10"
        >
          <div className="flex items-center gap-2 bg-white/50 backdrop-blur-sm border border-[#FF6B00]/20 rounded-full px-4 py-1.5 w-fit shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#FF6B00]"></span>
            <span className="text-sm font-medium text-[#FF6B00]">
              New: Enterprise SSO Integration
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            Digital business cards built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FF9E40]">
              lead capture
            </span>
            .
          </h1>

          <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
            The #1 platform for teams. Create, manage, and distribute digital
            cards that integrate directly with your CRM.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#FF6B00] hover:bg-[#E65100] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-orange-500/30 flex items-center justify-center gap-2 group">
              Start for free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-sm hover:shadow-md flex items-center justify-center">
              Book a demo
            </button>
          </div>

          <div className="pt-8 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-[#F5EDE4] bg-gray-200 overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-[#F5EDE4] bg-[#FF6B00] flex items-center justify-center text-white text-xs font-bold">
                  2.5M+
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex text-[#FF6B00]">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  Trusted by 2.5M+ professionals
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Leader", "High Performer", "Best Usability", "Momentum", "Users Love Us"].map((badge) => (
                <div
                  key={badge}
                  className="bg-white border border-gray-200 px-3 py-2 rounded-lg flex flex-col items-center justify-center shadow-sm w-20 h-24 gap-1 transform hover:-translate-y-1 transition-transform cursor-default"
                >
                  <span className="text-[10px] font-bold text-[#FF6B00] uppercase tracking-wider text-center leading-tight">
                    Winter 2025
                  </span>
                  <div className="w-full h-[1px] bg-gray-100 my-1"></div>
                  <span className="text-[9px] font-bold text-gray-800 text-center leading-tight">
                    {badge}
                  </span>
                  <div className="mt-auto">
                    <span className="text-[8px] font-bold text-[#FF6B00]">G2</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
           {/* Abstract Background Decoration */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-[#FF6B00]/20 to-transparent rounded-full blur-3xl opacity-30 pointer-events-none"></div>
           
           <div className="relative z-10 w-full max-w-md bg-white rounded-[2rem] border-[8px] border-white shadow-2xl overflow-hidden aspect-[9/16] mx-auto transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
             <img 
               src="https://images.unsplash.com/photo-1644952354935-0bc0d25a9996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd2FsbGV0JTIwc21hcnRwaG9uZXxlbnwxfHx8fDE3NzI0NTE4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
               alt="Digital Card Preview" 
               className="w-full h-full object-cover"
             />
             
             {/* Floating UI Elements simulating app interface */}
             <div className="absolute bottom-6 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20">
               <div className="flex items-center gap-3 mb-3">
                 <div className="w-10 h-10 bg-[#FF6B00] rounded-full flex items-center justify-center text-white font-bold text-lg">JS</div>
                 <div>
                   <h3 className="font-bold text-gray-900 text-sm">John Smith</h3>
                   <p className="text-xs text-gray-500">Sales Director @ TechCorp</p>
                 </div>
               </div>
               <div className="grid grid-cols-2 gap-2">
                 <button className="bg-gray-900 text-white text-xs py-2 rounded-lg font-medium">Save Contact</button>
                 <button className="bg-[#FF6B00] text-white text-xs py-2 rounded-lg font-medium">Exchange</button>
               </div>
             </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
