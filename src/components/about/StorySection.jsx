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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="rounded-lg bg-gray-100 p-8">
            <div className="auto-rows-subgrid grid grid-cols-[auto_1fr] gap-x-4 gap-y-4">
              {storyData.map((item, idx) => (
                <StoryComponent key={idx} {...item} />
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-gray-100 p-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-accent-600 mb-2 text-lg font-semibold">
                  Built With Intention
                </div>
                <div className="text-sm text-gray-600">
                  Every decision serves a purpose.
                </div>
              </div>
              <div className="text-center">
                <div className="text-accent-600 mb-2 text-lg font-semibold">
                  Fast & Lightweight
                </div>
                <div className="text-sm text-gray-600">
                  Optimized for real-world use.
                </div>
              </div>
              <div className="text-center">
                <div className="text-accent-600 mb-2 text-lg font-semibold">
                  Quietly Excellent
                </div>
                <div className="text-sm text-gray-600">
                  No fluff. Just clean, modern work.
                </div>
              </div>
              <div className="text-center">
                <div className="text-accent-600 mb-2 text-lg font-semibold">
                  Human First
                </div>
                <div className="text-sm text-gray-600">
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
