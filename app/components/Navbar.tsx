import { Home, User, LogOut, Heart, PlusCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  onAuthClick: () => void;
  currentView: string;
  onViewChange: (view: string) => void;
}

export const Navbar = ({ onAuthClick, currentView, onViewChange }: NavbarProps) => {
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => onViewChange('home')}
            className="flex items-center space-x-2 group"
          >
            <Home className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              RealEstateHub
            </span>
          </button>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                {user?.role === 'buyer' && (
                  <button
                    onClick={() => onViewChange('favorites')}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      currentView === 'favorites'
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Heart className="w-5 h-5" />
                    <span className="font-medium">Favorites</span>
                  </button>
                )}

                {(user?.role === 'seller' || user?.role === 'agent') && (
                  <>
                    <button
                      onClick={() => onViewChange('dashboard')}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                        currentView === 'dashboard'
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <User className="w-5 h-5" />
                      <span className="font-medium">Dashboard</span>
                    </button>
                    <button
                      onClick={() => onViewChange('add-property')}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <PlusCircle className="w-5 h-5" />
                      <span className="font-medium">Add Property</span>
                    </button>
                  </>
                )}

                <div className="flex items-center space-x-3 pl-4 border-l border-gray-300">
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                    <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
                  </div>
                  <button
                    onClick={logout}
                    className="p-2 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
                    title="Logout"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              </>
            ) : (
              <button
                onClick={onAuthClick}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
