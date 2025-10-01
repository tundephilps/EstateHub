import { CreditCard as Edit2, Trash2, Eye } from 'lucide-react';
import { Property } from '../types';
import { useAuth } from '../context/AuthContext';

interface SellerDashboardProps {
  properties: Property[];
  onViewDetails: (property: Property) => void;
  onDeleteProperty: (propertyId: string) => void;
}

export const SellerDashboard = ({
  properties,
  onViewDetails,
  onDeleteProperty
}: SellerDashboardProps) => {
  const { user } = useAuth();

  const myProperties = properties.filter((p) => p.agentId === user?.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">My Listings</h1>
        <p className="text-gray-600">
          Manage your property listings
        </p>
      </div>

      {myProperties.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No Properties Listed Yet
          </h3>
          <p className="text-gray-600 mb-4">
            Start by adding your first property listing
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Property
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Location
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Type
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Price
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {myProperties.map((property) => (
                  <tr key={property.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={property.images[0]}
                          alt={property.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <p className="font-medium text-gray-900">
                            {property.title}
                          </p>
                          <p className="text-sm text-gray-600">
                            {property.area.toLocaleString()} sqft
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {property.location}
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full capitalize">
                        {property.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full capitalize">
                        For {property.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      ${property.price.toLocaleString()}
                      {property.status === 'rent' && '/mo'}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => onViewDetails(property)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                        <button
                          className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Edit Property"
                        >
                          <Edit2 className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => {
                            if (
                              window.confirm(
                                'Are you sure you want to delete this property?'
                              )
                            ) {
                              onDeleteProperty(property.id);
                            }
                          }}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete Property"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-600 text-sm mb-1">Total Listings</p>
          <p className="text-3xl font-bold text-gray-900">
            {myProperties.length}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-600 text-sm mb-1">For Sale</p>
          <p className="text-3xl font-bold text-blue-600">
            {myProperties.filter((p) => p.status === 'sale').length}
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-600 text-sm mb-1">For Rent</p>
          <p className="text-3xl font-bold text-green-600">
            {myProperties.filter((p) => p.status === 'rent').length}
          </p>
        </div>
      </div>
    </div>
  );
};
