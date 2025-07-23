"use client";
import StoryComponent from "./StoryComponent";

const StorySection = () => {

  const storyData = [
    {
      icon: "Zap",
      title: "Why EverLessTech?",
      text: "EverLessTech was created to cut through the noise — a response to the stress, friction, and complexity people face when dealing with clunky, half-finished software.",
    },
    {
      icon: "Feather",
      title: "Built for Simplicity",
      text: "Our goal is simple: build clean, responsive websites that feel effortless to use and easy to trust.",
    },
    {
      icon: "Eye",
      title: "Transparent Process",
      text: "Clients can follow progress in real time, give feedback anytime, and always know what’s happening behind the scenes.",
    },
    {
      icon: "Code",
      title: "Small Changes, Constantly",
      text: "Frequent, focused updates using CI/CD — not big risky rollouts.",
    },
    {
      icon: "Heart",
      title: "Less Tech, More Life",
      text: "Not just a motto — a working principle. You handle your business, I’ll handle the backend.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="bg-gray-100 rounded-lg p-8">
            <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-4 auto-rows-subgrid ">
              {storyData.map((item, idx) => (
                <StoryComponent key={idx} {...item} />
              ))}
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-lg font-semibold text-accent-600 mb-2">
                  Built With Intention
                </div>
                <div className="text-gray-600 text-sm">
                  Every decision serves a purpose.
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-accent-600 mb-2">
                  Fast & Lightweight
                </div>
                <div className="text-gray-600 text-sm">
                  Optimized for real-world use.
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-accent-600 mb-2">
                  Quietly Excellent
                </div>
                <div className="text-gray-600 text-sm">
                  No fluff. Just clean, modern work.
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-accent-600 mb-2">
                  Human First
                </div>
                <div className="text-gray-600 text-sm">
                  Got a problem? We'll find a solution.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
