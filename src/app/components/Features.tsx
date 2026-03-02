import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Leaf, Users, Globe, Scan, LayoutDashboard, Share2, Shield, Zap } from "lucide-react";

export function Features() {
  return (
    <div className="bg-white py-24">
      <FeatureGrid />
      <div className="h-24" /> {/* Spacer */}
      <FeatureShowcase />
    </div>
  );
}

function FeatureGrid() {
  const features = [
    {
      title: "Instant Lead Capture",
      description: "Capture contact details instantly with a tap or scan. Sync automatically with 4000+ apps.",
      icon: <Scan className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "Global Enterprise Control",
      description: "Manage thousands of cards from a single dashboard. Enforce brand consistency globally.",
      icon: <Globe className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "Sustainable Networking",
      description: "Save thousands of trees by switching to digital. Track your company's carbon reduction.",
      icon: <Leaf className="w-6 h-6 text-orange-600" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why teams choose Digital Cards</h2>
        <p className="text-lg text-slate-600">
          The all-in-one platform for modern professional networking.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
            <p className="text-slate-600 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: "capture",
      label: "Lead Capture",
      title: "Capture leads faster than ever",
      description: "With Digital Cards, you can capture leads instantly using QR codes, NFC, or direct links. No app required for the recipient.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80",
      icon: <Scan size={18} />
    },
    {
      id: "crm",
      label: "CRM Integration",
      title: "Sync with your favorite tools",
      description: "Directly integrate with Salesforce, HubSpot, Zoho, and 4000+ other apps via Zapier. Never lose a lead again.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1615&q=80",
      icon: <Zap size={18} />
    },
    {
      id: "dashboard",
      label: "Team Dashboard",
      title: "Manage your team at scale",
      description: "Create, edit, and deactivate cards for your entire organization from one central dashboard. Bulk upload available.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      icon: <LayoutDashboard size={18} />
    },
    {
      id: "analytics",
      label: "Analytics",
      title: "Measure your ROI",
      description: "Track scans, clicks, and lead generation performance across your entire team. Data-driven networking.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
      icon: <Users size={18} />
    },
    {
      id: "security",
      label: "Security",
      title: "Enterprise-grade security",
      description: "SOC 2 Type II compliant. SSO, MDM, and custom privacy settings to keep your data safe.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      icon: <Shield size={18} />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
       <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Powerful features for every team</h2>
            
            {/* Scrollable Tabs */}
            <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
                <div className="flex space-x-2 md:justify-center min-w-max px-4">
                    {tabs.map((tab, idx) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(idx)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                                activeTab === idx
                                ? "bg-slate-900 text-white shadow-lg scale-105"
                                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                            }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>
       </div>

       {/* Content Area */}
       <div className="bg-[#F5EDE4] rounded-3xl p-8 md:p-12 overflow-hidden min-h-[500px] relative">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid md:grid-cols-2 gap-12 items-center h-full"
                >
                    <div className="order-2 md:order-1">
                        <div className="inline-block p-3 bg-orange-100 rounded-2xl text-orange-600 mb-6">
                            {tabs[activeTab].icon}
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            {tabs[activeTab].title}
                        </h3>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            {tabs[activeTab].description}
                        </p>
                        <button className="text-orange-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all group">
                            Learn more about {tabs[activeTab].label} <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                    </div>
                    
                    <div className="order-1 md:order-2 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
                        <img 
                            src={tabs[activeTab].image} 
                            alt={tabs[activeTab].title} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>
                </motion.div>
            </AnimatePresence>
       </div>
    </div>
  );
}
