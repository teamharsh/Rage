export default function Services() {
  return (
    <section className="min-h-auto bg-black px-4 py-8 pb-16 md:pb-32">
      <div className="container mx-auto">
        <div className="mb-8 flex flex-col items-center justify-between">
          <h2 className="text-center font-poppins  text-4xl font-semibold text-white drop-shadow-lg mb-4 md:mb-0">
            Services We Offer
          </h2>
          <a
            href="#"
            className="font-poppins text-lg font-medium text-white underline drop-shadow-lg md:self-end"
          >
            View All Services
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Drones Card */}
          <div className="rounded-[38px] bg-gradient-to-b from-[#FF3434] via-[rgba(3,62,79,0.58)] to-[rgba(1,19,24,0.15)] p-6">
            <h3 className="mb-8 text-center font-poppins text-2xl md:text-3xl font-bold text-white">
              Drones for Every Purpose
            </h3>
            <ul className="space-y-2 font-poppins text-base md:text-lg text-white">
              <li>• Aerial Photography Drones</li>
              <li>• Videography Drones</li>
              <li>• Racing and FPV Drones</li>
              <li>• Professional Surveying Drones</li>
              <li>• Mapping Drones</li>
              <li>• Agriculture Crop Monitoring Drones</li>
              <li>• Recreational and Hobbyist Drones</li>
            </ul>
          </div>

          {/* Robots Card */}
          <div className="rounded-[38px] bg-gradient-to-b from-[#FF3434] via-[rgba(3,62,79,0.58)] to-[rgba(1,19,24,0.15)] p-6">
            <h3 className="mb-8 text-center font-poppins text-2xl md:text-3xl font-bold text-white">
              Robots for Efficiency and Innovation
            </h3>
            <ul className="space-y-2 font-poppins text-base md:text-lg text-white">
              <li>• Industrial Automation Robots</li>
              <li>• Educational and STEM Robotics</li>
              <li>• Service and Healthcare Robots</li>
              <li>• Custom Robotic Solutions</li>
              <li>• Research and Development Robotics</li>
            </ul>
          </div>

          {/* Parts Card */}
          <div className="rounded-[38px] bg-gradient-to-b from-[#FF3434] via-[rgba(3,62,79,0.58)] to-[rgba(1,19,24,0.15)] p-6">
            <h3 className="mb-8 text-center font-poppins text-2xl md:text-3xl font-bold text-white">
              Comprehensive Parts and Components
            </h3>
            <ul className="space-y-2 font-poppins text-base md:text-lg text-white">
              <li>• Motors, Propellers, and Batteries</li>
              <li>• Sensors and Controllers</li>
              <li>• Chassis and Frames</li>
              <li>• Cameras and Gimbals</li>
              <li>• Software and Programming Tools</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}