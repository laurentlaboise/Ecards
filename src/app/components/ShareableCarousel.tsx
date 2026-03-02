import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { QrCode, Smartphone, Mail, Link, CreditCard, Share2 } from "lucide-react";

const slides = [
  {
    title: "Instant QR Share",
    icon: QrCode,
    image: "https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwZGlzcGxheWluZyUyMHFyJTIwY29kZXxlbnwxfHx8fDE3NzI0ODUxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    desc: "Share your profile instantly with a custom QR code.",
  },
  {
    title: "Apple Wallet Pass",
    icon: CreditCard,
    image: "https://images.unsplash.com/photo-1621504450168-38f64731993f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    desc: "Add your card to Apple Wallet for quick access.",
  },
  {
    title: "Email Signatures",
    icon: Mail,
    image: "https://images.unsplash.com/photo-1614169270795-297a47121775?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMHNpZ25hdHVyZSUyMGxhcHRvcHxlbnwxfHx8fDE3NzI0ODUxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    desc: "Professional signatures that link to your digital card.",
  },
  {
    title: "NFC Tap",
    icon: Share2,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    desc: "Tap your phone or card to share contact details.",
  },
  {
    title: "Google Wallet",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1605218427368-35b865d83647?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    desc: "Native integration with Google Wallet on Android.",
  },
  {
    title: "Social Bio Link",
    icon: Link,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    desc: "One link for all your social media profiles.",
  },
];

export function ShareableCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-24 bg-[#FFFaf5] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#FF6B00] font-bold tracking-wider uppercase text-sm">
            Share Anywhere
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Most Shareable Business Card
          </h2>
        </div>

        <Slider {...settings} className="pb-12">
          {slides.map((slide, index) => (
            <div key={index} className="px-3">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
                <div className="h-48 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full p-2 z-20 shadow-sm text-[#FF6B00]">
                    <slide.icon size={20} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {slide.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {slide.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
