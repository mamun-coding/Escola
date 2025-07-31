import { CheckCircle } from "lucide-react";

export default function FeatureCard({ title, description }) {
  return (
    <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6 p-3 sm:p-4 lg:p-0 rounded-lg hover:bg-gray-50 transition-colors duration-200">
      <div className="text-blue-600 mt-0.5 sm:mt-1 flex-shrink-0">
        <CheckCircle size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 leading-tight sm:leading-normal mb-1 sm:mb-2">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}