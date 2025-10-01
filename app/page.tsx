"use client";
import { useState, useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";
import { useAuth } from "./context/AuthContext";
import { Navbar } from "./components/Navbar";
import { AuthModal } from "./components/AuthModal";
import { PropertyGrid } from "./components/PropertyGrid";
import { PropertyDetail } from "./components/PropertyDetail";
import { FavoritesView } from "./components/FavoritesView";
import { SellerDashboard } from "./components/SellerDashboard";
import { AddPropertyForm } from "./components/AddPropertyForm";
import { mockProperties } from "./data/mockData";
import { Property } from "./types";

const AppContent = () => {
  const { user, isAuthenticated } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState("home");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [properties, setProperties] = useState<Property[]>(mockProperties);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      setCurrentView("home");
    }
  }, [isAuthenticated]);

  const handleToggleFavorite = (propertyId: string) => {
    const newFavorites = favorites.includes(propertyId)
      ? favorites.filter((id) => id !== propertyId)
      : [...favorites, propertyId];
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const handleAddProperty = (
    newProperty: Omit<Property, "id" | "createdAt">
  ) => {
    const property: Property = {
      ...newProperty,
      id: String(Date.now()),
      createdAt: new Date(),
    };
    setProperties([property, ...properties]);
    setCurrentView("dashboard");
  };

  const handleDeleteProperty = (propertyId: string) => {
    setProperties(properties.filter((p) => p.id !== propertyId));
  };

  const renderView = () => {
    if (selectedProperty) {
      return (
        <PropertyDetail
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          isFavorite={favorites.includes(selectedProperty.id)}
          onToggleFavorite={handleToggleFavorite}
        />
      );
    }

    switch (currentView) {
      case "favorites":
        return (
          <FavoritesView
            properties={properties}
            favorites={favorites}
            onViewDetails={setSelectedProperty}
            onToggleFavorite={handleToggleFavorite}
          />
        );
      case "dashboard":
        return (
          <SellerDashboard
            properties={properties}
            onViewDetails={setSelectedProperty}
            onDeleteProperty={handleDeleteProperty}
          />
        );
      case "add-property":
        return (
          <AddPropertyForm
            onAdd={handleAddProperty}
            onCancel={() => setCurrentView("dashboard")}
          />
        );
      default:
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Find Your Dream Property
              </h1>
              <p className="text-xl text-gray-600">
                Browse thousands of listings from trusted agents and sellers
              </p>
            </div>
            <PropertyGrid
              properties={properties}
              onViewDetails={setSelectedProperty}
              favorites={favorites}
              onToggleFavorite={
                isAuthenticated ? handleToggleFavorite : undefined
              }
            />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        onAuthClick={() => setIsAuthModalOpen(true)}
        currentView={currentView}
        onViewChange={setCurrentView}
      />
      {renderView()}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
