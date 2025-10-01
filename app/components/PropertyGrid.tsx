import { useState } from 'react';
import { Property, PropertyType, PropertyStatus } from '../types';
import { PropertyCard } from './PropertyCard';
import { PropertyFilters } from './PropertyFilters';

interface PropertyGridProps {
  properties: Property[];
  onViewDetails: (property: Property) => void;
  favorites?: string[];
  onToggleFavorite?: (propertyId: string) => void;
}

export const PropertyGrid = ({
  properties,
  onViewDetails,
  favorites = [],
  onToggleFavorite
}: PropertyGridProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<PropertyType | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<PropertyStatus | 'all'>('all');
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange] = useState<[number, number]>([0, 10000000]);

  const filteredProperties = properties.filter((property) => {
    const matchesSearch = property.location
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || property.type === selectedType;
    const matchesStatus =
      selectedStatus === 'all' || property.status === selectedStatus;
    const matchesPrice =
      property.price >= priceRange[0] && property.price <= priceRange[1];

    return matchesSearch && matchesType && matchesStatus && matchesPrice;
  });

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return b.createdAt.getTime() - a.createdAt.getTime();
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div>
      <PropertyFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        sortBy={sortBy}
        onSortChange={setSortBy}
        priceRange={priceRange}
        onPriceRangeChange={() => {}}
      />

      {sortedProperties.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No properties found matching your criteria
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onViewDetails={onViewDetails}
              isFavorite={favorites.includes(property.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
};
