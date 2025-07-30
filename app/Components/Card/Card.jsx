import { CheckCircle } from "lucide-react";

export default function FeatureCard({ title, description }) {
  return (
    <div className="flex items-start space-x-4 mb-6">
      <div className="text-blue-600 mt-1">
        <CheckCircle size={28} />
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-700 mt-1">{description}</p>
      </div>
    </div>
  );
}
