import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  BarChart3,
  Users,
  Briefcase,
  ShieldCheck,
  CreditCard,
  QrCode,
  Mail,
  Layers,
  Zap,
  Globe,
  Smartphone,
} from "lucide-react";

const features = [
  {
    id: "lead-capture",
    label: "Lead Capture",
    icon: Users,
    title: "Capture leads instantly",
    description: "Scan business cards directly into your CRM with AI-powered text recognition. Never lose a contact again.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80",
  },
  {
    id: "team-analytics",
    label: "Team Analytics",
    icon: BarChart3,
    title: "Track team performance",
    description: "Real-time insights into how your team is networking. Measure card views, link clicks, and new connections.",
    image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzIzODkyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "crm-integrations",
    label: "CRM Sync",
    icon: Layers,
    title: "Sync with 5000+ apps",
    description: "Seamlessly integrate with Salesforce, HubSpot, Zoho, and more. Automate your follow-up workflows.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
  },
  {
    id: "custom-branding",
    label: "Branding",
    icon: Briefcase,
    title: "Your brand, front and center",
    description: "Fully customizable designs that match your corporate identity. Control colors, logos, and layout.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: "security",
    label: "Security",
    icon: ShieldCheck,
    title: "Enterprise-grade security",
    description: "SOC 2 Type II compliant, SSO, and MDM support. Keep your data safe and compliant.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: "bulk-creation",
    label: "Bulk Create",
    icon: Zap,
    title: "Onboard thousands in minutes",
    description: "Upload a CSV or sync with your HR directory to create cards for your entire organization instantly.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: "digital-wallet",
    label: "Wallet",
    icon: CreditCard,
    title: "Apple & Google Wallet",
    description: "Share your card directly from your phone's wallet. No app required for receivers.",
    image: "https://images.unsplash.com/photo-1644952354935-0bc0d25a9996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd2FsbGV0JTIwc21hcnRwaG9uZXxlbnwxfHx8fDE3NzI0NTE4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "email-signatures",
    label: "Signatures",
    icon: Mail,
    title: "Dynamic Email Signatures",
    description: "Turn every email into a lead generation opportunity with unified, professional signatures.",
    image: "https://images.unsplash.com/photo-1614169270795-297a47121775?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMHNpZ25hdHVyZSUyMGxhcHRvcHxlbnwxfHx8fDE3NzI0ODUxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "qr-codes",
    label: "QR Codes",
    icon: QrCode,
    title: "Custom QR Codes",
    description: "Generate unique QR codes for marketing materials, events, and office spaces.",
    image: "https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwZGlzcGxheWluZyUyMHFyJTIwY29kZXxlbnwxfHx8fDE3NzI0ODUxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "nfc-cards",
    label: "NFC Cards",
    icon: Smartphone,
    title: "Premium NFC Cards",
    description: "Tap to share. Metal, wood, and plastic cards with embedded NFC technology.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
  },
  {
    id: "admin-dashboard",
    label: "Admin",
    icon: Globe,
    title: "Centralized Control",
    description: "Manage permissions, update details, and revoke access from a single dashboard.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
];

export function FeatureTabs() {
  const [activeTab, setActiveTab] = useState(features[0].id);

  return (
    <section className="py-24 bg-white/50 backdrop-blur-sm relative z-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to grow your network
          </h2>
          <p className="text-lg text-gray-600">
            A complete platform designed for modern professionals and teams.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {/* Scrollable Tabs */}
          <div className="relative">
            <div className="flex overflow-x-auto pb-4 gap-2 hide-scrollbar snap-x">
              {features.map((feature) => {
                const Icon = feature.icon;
                const isActive = activeTab === feature.id;
                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveTab(feature.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 snap-center border ${
                      isActive
                        ? "bg-[#FF6B00] text-white border-[#FF6B00] shadow-md"
                        : "bg-white text-gray-600 border-gray-200 hover:border-[#FF6B00]/50 hover:bg-[#FFF0E6]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {feature.label}
                  </button>
                );
              })}
            </div>
            {/* Fade effect for scroll */}
            <div className="absolute right-0 top-0 bottom-4 w-24 bg-gradient-to-l from-[#F5EDE4] to-transparent pointer-events-none md:hidden"></div>
          </div>

          {/* Content Area */}
          <div className="relative min-h-[500px] bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl overflow-hidden">
            <AnimatePresence mode="wait">
              {features.map((feature) => {
                if (feature.id !== activeTab) return null;
                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full"
                  >
                    <div className="space-y-6">
                      <div className="w-12 h-12 bg-[#FF6B00]/10 rounded-2xl flex items-center justify-center text-[#FF6B00]">
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                      <ul className="space-y-3 pt-4">
                        {[1, 2, 3].map((i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-700">
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="font-medium">Benefit feature point {i}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="mt-6 text-[#FF6B00] font-bold flex items-center gap-2 hover:gap-3 transition-all group">
                        Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </button>
                    </div>
                    <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg group">
                      <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
