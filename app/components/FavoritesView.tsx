import { Property } from "../types";
import { PropertyCard } from "./PropertyCard";
import { Heart } from "lucide-react";

interface FavoritesViewProps {
  properties: Property[];
  favorites: string[];
  onViewDetails: (property: Property) => void;
  onToggleFavorite: (propertyId: string) => void;
}

export const FavoritesView = ({
  properties,
  favorites,
  onViewDetails,
  onToggleFavorite,
}: FavoritesViewProps) => {
  const favoriteProperties = properties.filter((p) => favorites.includes(p.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">My Favorites</h1>
        <p className="text-gray-600">
          Properties you have saved for later viewing
        </p>
      </div>

      {favoriteProperties.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl shadow-md">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No Favorites Yet
          </h3>
          <p className="text-gray-600">
            Start browsing properties and add your favorites to see them here
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onViewDetails={onViewDetails}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};
