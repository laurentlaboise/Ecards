import { Shield, Lock, FileCheck, Server, Key, EyeOff } from "lucide-react";

export function SecurityBlock() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold border border-blue-100">
            <Shield className="w-4 h-4" />
            Enterprise Grade Security
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Your data is safe with us.
            <br />
            <span className="text-blue-600">Guaranteed.</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We adhere to the strictest security standards to ensure your organization's data remains private and protected at all times.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {[
              { icon: FileCheck, title: "SOC 2 Type II", desc: "Audited and certified compliance." },
              { icon: Lock, title: "GDPR Compliant", desc: "Full data privacy adherence." },
              { icon: Key, title: "SSO Integration", desc: "Okta, Azure AD, and more." },
              { icon: Server, title: "Data Encryption", desc: "AES-256 encryption at rest." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                <div className="bg-blue-100 p-2.5 rounded-lg text-blue-600 h-fit">
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-blue-600/5 rounded-[3rem] transform rotate-3 scale-95"></div>
          <div className="bg-white border border-gray-200 shadow-2xl rounded-3xl p-8 relative z-10">
            <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-6">
               <div className="flex items-center gap-3">
                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
               </div>
               <div className="text-xs font-mono text-gray-400">security_audit_log.json</div>
            </div>
            
            <div className="space-y-4 font-mono text-sm">
                <div className="flex gap-4 text-green-600">
                    <span className="text-gray-400">09:41:22</span>
                    <span>[SUCCESS] SSO Authentication Verified</span>
                </div>
                 <div className="flex gap-4 text-blue-600">
                    <span className="text-gray-400">09:41:23</span>
                    <span>[INFO] Encrypted connection established (TLS 1.3)</span>
                </div>
                 <div className="flex gap-4 text-gray-600">
                    <span className="text-gray-400">09:41:25</span>
                    <span>[AUDIT] User access granted: ID #8492</span>
                </div>
                 <div className="flex gap-4 text-purple-600">
                    <span className="text-gray-400">09:42:01</span>
                    <span>[SYSTEM] SOC 2 Compliance Check: PASSED</span>
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-600">AICPA</div>
                    <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">SOC2</div>
                </div>
                <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">View Security Whitepaper →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
