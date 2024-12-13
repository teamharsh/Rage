import Users from "../assets/people-community.png";
import MessageSquare from "../assets/comment.png";
import Briefcase from "../assets/business-center.png";
import Megaphone from "../assets/announcement.png";

export default function StatisticsSection() {
  const stats = [
    {
      icon: Users,
      number: "150+",
      label: "Happy Customers",
    },
    {
      icon: MessageSquare,
      number: "200+",
      label: "Satisfactory Reviews",
    },
    {
      icon: Briefcase,
      number: "15+",
      label: "Products",
    },
    {
      icon: Megaphone,
      number: "1000+",
      label: "Product Fanbase",
    },
  ];

  return (
    <section className="relative w-auto mx-8 md:mx-16 py-1 md:py-2">
      
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(23,53,68,0.39)] to-[#05425F] rounded-3xl" />

      {/* Blur effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#14749D] opacity-20 blur-[97.5px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 md:grid-cols-4 gap-4 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-top p-4 sm:p-6 transition-transform hover:scale-105"
            >
              <img
                src={stat.icon}
                alt={stat.label}
                className="w-8 h-6 sm:w-12 sm:h-12 mb-4"
              />
              <span className="text-l sm:text-xl font-bold text-white mb-2">
                {stat.number}
              </span>
              <span className="text-xs sm:text-sm font-medium text-white opacity-90 text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
