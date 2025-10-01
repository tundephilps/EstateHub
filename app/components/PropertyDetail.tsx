import { useState } from "react";
import {
  X,
  MapPin,
  Bed,
  Bath,
  Square,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Heart,
} from "lucide-react";
import { Property } from "../types";
import { useAuth } from "../context/AuthContext";

interface PropertyDetailProps {
  property: Property;
  onClose: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: (propertyId: string) => void;
}

export const PropertyDetail = ({
  property,
  onClose,
  isFavorite = false,
  onToggleFavorite,
}: PropertyDetailProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { user } = useAuth();

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const formatPrice = (price: number) => {
    if (property.status === "rent") {
      return `$${price.toLocaleString()}/month`;
    }
    return `$${price.toLocaleString()}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50">
      <div className="min-h-screen px-4 py-8">
        <div className="bg-white rounded-2xl shadow-2xl max-w-5xl mx-auto relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>

          <div className="relative h-96 rounded-t-2xl overflow-hidden">
            <img
              src={property.images[currentImageIndex]}
              alt={property.title}
              className="w-full h-full object-cover"
            />

            {property.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {property.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-white w-8"
                          : "bg-white bg-opacity-50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full capitalize">
                For {property.status}
              </span>
              <span className="px-3 py-1 bg-white text-gray-900 text-sm font-semibold rounded-full capitalize">
                {property.type}
              </span>
            </div>

            {user?.role === "buyer" && onToggleFavorite && (
              <button
                onClick={() => onToggleFavorite(property.id)}
                className="absolute top-4 right-16 p-2 bg-white rounded-full shadow-lg hover:bg-red-50 transition-colors"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
                  }`}
                />
              </button>
            )}
          </div>

          <div className="lg:p-8 p-2">
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                {property.title}
              </h1>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="text-lg">{property.location}</span>
              </div>
              <p className="lg:text-5xl text-[13px] font-bold text-blue-600">
                {formatPrice(property.price)}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-8 pb-8 border-b border-gray-200">
              {property.bedrooms && (
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Bed className="w-8 h-8 mx-auto mb-2 text-gray-700" />
                  <p className="lg:text-2xl text-[12px] font-bold text-gray-900">
                    {property.bedrooms}
                  </p>
                  <p className="text-sm text-gray-600">Bedrooms</p>
                </div>
              )}
              {property.bathrooms && (
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Bath className="w-8 h-8 mx-auto mb-2 text-gray-700" />
                  <p className="lg:text-2xl text-[12px] font-bold text-gray-900">
                    {property.bathrooms}
                  </p>
                  <p className="text-sm text-gray-600">Bathrooms</p>
                </div>
              )}
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <Square className="w-8 h-8 mx-auto mb-2 text-gray-700" />
                <p className="lg:text-2xl text-[12px] font-bold text-gray-900">
                  {property.area.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600">Square Feet</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {property.description}
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Agent
              </h2>
              <div className="space-y-3">
                <div className="flex lg:flex-row flex-col items-center text-gray-700">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {property.agentName.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-lg">
                      {property.agentName}
                    </p>
                    <p className="text-sm text-gray-600">Real Estate Agent</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-700 pl-16">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>{property.agentContact}</span>
                </div>
                <div className="flex items-center text-gray-700 pl-16">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>
                    {property.agentName.toLowerCase().replace(" ", ".")}
                    @realestatehub.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
