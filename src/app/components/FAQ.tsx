import { useState } from "react";
import { Plus, Minus, Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const categories = [
  "General",
  "Pricing",
  "Teams",
  "Security",
  "Privacy",
  "Compatibility",
  "Enterprise",
];

const faqData = [
  {
    category: "General",
    question: "What is a digital business card?",
    answer:
      "A digital business card is a modern, eco-friendly way to share your contact information. It lives on your phone and can be shared via QR code, link, or NFC tap.",
  },
  {
    category: "General",
    question: "Do I need an app to receive a card?",
    answer:
      "No! The receiver does not need any app to view your digital business card. It opens directly in their phone's browser.",
  },
  {
    category: "Pricing",
    question: "Is there a free version?",
    answer:
      "Yes, we offer a free plan for individuals that includes basic customization and sharing features.",
  },
  {
    category: "Teams",
    question: "Can I manage cards for my entire company?",
    answer:
      "Absolutely. Our Teams plan allows you to create, manage, and update cards for all your employees from a central dashboard.",
  },
  {
    category: "Security",
    question: "Is my data secure?",
    answer:
      "We take security seriously. We are SOC 2 Type II compliant and use bank-level encryption to protect your data.",
  },
  {
    category: "Privacy",
    question: "Do you sell my data?",
    answer:
      "Never. Your data is your own. We do not sell or share your personal information with third parties.",
  },
  {
    category: "Compatibility",
    question: "Does it work on older phones?",
    answer:
      "Yes, our digital cards work on any smartphone with a web browser. NFC features require NFC-enabled devices (most modern phones).",
  },
  {
    category: "Enterprise",
    question: "Do you offer SSO?",
    answer:
      "Yes, Enterprise plans include Single Sign-On (SSO) integration with major providers like Okta and Microsoft Azure.",
  },
];

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState("General");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = faqData.filter((faq) => faq.category === activeCategory);

  return (
    <section className="py-24 bg-[#F9F9F9]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about DIGITAL CARDS.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Categories Sidebar */}
          <div className="md:w-1/4">
            <h3 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-wider">
              Categories
            </h3>
            <div className="flex flex-col gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenIndex(null);
                  }}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-[#FF6B00] text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion */}
          <div className="md:w-3/4">
             <AnimatePresence mode="wait">
            <motion.div
               key={activeCategory}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               transition={{ duration: 0.3 }}
               className="space-y-4"
            >
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#FF6B00]/30 transition-colors"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-bold text-gray-900 text-lg">
                        {faq.question}
                      </span>
                      {openIndex === index ? (
                        <Minus className="w-5 h-5 text-[#FF6B00]" />
                      ) : (
                        <Plus className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))
              ) : (
                 <div className="p-8 text-center text-gray-500 bg-white rounded-xl border border-dashed border-gray-300">
                    No FAQs found for this category.
                 </div>
              )}
            </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
