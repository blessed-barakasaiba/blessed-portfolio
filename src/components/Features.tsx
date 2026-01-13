// Features.jsx
import ContinuousRotatingBorderCard from "./ContinuousRotatingBorderCard";

const Features = () => {
  const features = [
    { id: 1, title: "Fast Performance", color: "cyan", description: "Lightning fast response times with optimized animations" },
    { id: 2, title: "Modern Design", color: "purple", description: "Clean and contemporary UI with electric effects" },
    { id: 3, title: "Customizable", color: "orange", description: "Easily adjust colors and animation speeds" },
    { id: 4, title: "Responsive", color: "green", description: "Looks great on all screen sizes" },
    { id: 5, title: "Interactive", color: "cyan", description: "Hover effects for enhanced user experience" },
    { id: 6, title: "Easy to Use", color: "orange", description: "Simple implementation with clear documentation" },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-900 to-black" id="features">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Features
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Experience the power of animated electric borders with these amazing features
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {features.map((feature) => (
            <div key={feature.id} className="flex justify-center">
              <ContinuousRotatingBorderCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;