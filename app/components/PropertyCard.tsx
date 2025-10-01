import { MapPin, Bed, Bath, Square, Heart } from "lucide-react";
import { Property } from "../types";
import { useAuth } from "../context/AuthContext";

interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
  isFavorite?: boolean;
  onToggleFavorite?: (propertyId: string) => void;
}

export const PropertyCard = ({
  property,
  onViewDetails,
  isFavorite = false,
  onToggleFavorite,
}: PropertyCardProps) => {
  const { user } = useAuth();

  const formatPrice = (price: number) => {
    if (property.status === "rent") {
      return `$${price.toLocaleString()}/mo`;
    }
    return `$${price.toLocaleString()}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
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
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(property.id);
            }}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-red-50 transition-colors"
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
              }`}
            />
          </button>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
          {property.title}
        </h3>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {property.description}
        </p>

        <div className="flex items-center gap-4 text-gray-600 mb-4 pb-4 border-b border-gray-200">
          {property.bedrooms && (
            <div className="flex items-center">
              <Bed className="w-4 h-4 mr-1" />
              <span className="text-sm">{property.bedrooms} Beds</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center">
              <Bath className="w-4 h-4 mr-1" />
              <span className="text-sm">{property.bathrooms} Baths</span>
            </div>
          )}
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            <span className="text-sm">
              {property.area.toLocaleString()} sqft
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="lg:text-2xl text-[13px] font-bold text-blue-600">
              {formatPrice(property.price)}
            </p>
          </div>
          <button
            onClick={() => onViewDetails(property)}
            className="px-6 py-2 bg-gray-900 text-white rounded-lg font-medium lg:text-base text-[10px]  hover:bg-gray-800 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
