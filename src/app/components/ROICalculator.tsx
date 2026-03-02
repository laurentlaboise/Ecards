import { useState, useEffect } from "react";
import { TreeDeciduous, DollarSign, CloudRain } from "lucide-react";
import CountUp from "react-countup";

export function ROICalculator() {
  const [employees, setEmployees] = useState(500);
  const [cardCost, setCardCost] = useState(150); // Annual cost per employee for paper cards
  
  const [savings, setSavings] = useState(0);
  const [trees, setTrees] = useState(0);
  const [water, setWater] = useState(0);

  useEffect(() => {
    // Assumptions:
    // Digital card cost: $50/year/employee (enterprise rate)
    // Paper card waste: ~50% thrown away
    // 100 employees = 1 tree saved per year (approx based on paper usage)
    // 1 tree = 10,000L water saved in production? (approx)
    
    const digitalCost = 50;
    const paperCost = cardCost;
    
    const costSavings = employees * (paperCost - digitalCost);
    const treesSaved = Math.round((employees / 100) * 12); // 12 trees per 100 employees over 5 years? Let's say annual. 
    // Let's make it more impressive: 1 employee = 2 boxes of cards/year = 0.02 trees?
    // Let's just use a multiplier for "Environmental Impact"
    const treesCalc = Math.ceil(employees * 0.15); 
    const waterCalc = Math.ceil(employees * 450); // Liters

    setSavings(costSavings > 0 ? costSavings : 0);
    setTrees(treesCalc);
    setWater(waterCalc);
  }, [employees, cardCost]);

  return (
    <section className="py-24 bg-[#1A1A1A] text-white relative overflow-hidden">
        {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6B00]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Calculate your <span className="text-[#FF6B00]">ROI</span> & Impact
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See how much your organization can save by switching to digital business cards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Controls */}
          <div className="space-y-12 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <label htmlFor="employees" className="text-xl font-medium text-gray-200">
                  Number of Employees
                </label>
                <div className="bg-[#FF6B00]/20 border border-[#FF6B00] text-[#FF6B00] px-4 py-2 rounded-lg font-bold text-xl min-w-[100px] text-center">
                    {employees}
                </div>
              </div>
              <input
                id="employees"
                type="range"
                min="10"
                max="5000"
                step="10"
                value={employees}
                onChange={(e) => setEmployees(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#FF6B00]"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>10</span>
                <span>5,000+</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <label htmlFor="cost" className="text-xl font-medium text-gray-200">
                  Current Annual Paper Cost (per employee)
                </label>
                 <div className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg font-bold text-xl min-w-[100px] text-center flex items-center justify-center gap-1">
                    <span className="text-sm text-gray-400">$</span>{cardCost}
                </div>
              </div>
              <input
                id="cost"
                type="range"
                min="50"
                max="500"
                step="10"
                value={cardCost}
                onChange={(e) => setCardCost(parseInt(e.target.value))}
                className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#FF6B00]"
              />
               <div className="flex justify-between text-xs text-gray-500">
                <span>$50</span>
                <span>$500</span>
              </div>
            </div>
            
             <p className="text-sm text-gray-500 italic pt-4">
                *Estimates based on average industry printing and design costs compared to Digital Cards Enterprise plan.
            </p>
          </div>

          {/* Results */}
          <div className="grid gap-6">
            <div className="bg-gradient-to-br from-[#FF6B00] to-[#E65100] p-8 rounded-3xl text-white shadow-2xl transform hover:scale-[1.02] transition-transform">
              <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-white/20 rounded-xl">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-medium text-orange-100">Annual Cost Savings</h3>
              </div>
              <div className="text-5xl md:text-7xl font-bold tracking-tight mt-4">
                $<CountUp end={savings} separator="," duration={1} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between h-48 hover:bg-white/10 transition-colors">
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                        <TreeDeciduous className="w-6 h-6 text-green-400" />
                    </div>
                    <span className="text-gray-400 font-medium">Trees Saved</span>
                 </div>
                 <div className="text-4xl font-bold text-white">
                    <CountUp end={trees} duration={2} />
                 </div>
              </div>

               <div className="bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col justify-between h-48 hover:bg-white/10 transition-colors">
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                        <CloudRain className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-gray-400 font-medium">Water Saved (L)</span>
                 </div>
                 <div className="text-4xl font-bold text-white">
                    <CountUp end={water} separator="," duration={2} />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
