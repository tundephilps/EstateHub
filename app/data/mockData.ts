import { Property, User } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'buyer',
    phone: '+1 234 567 8900'
  },
  {
    id: '2',
    name: 'Sarah Smith',
    email: 'sarah@example.com',
    role: 'agent',
    phone: '+1 234 567 8901'
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    role: 'seller',
    phone: '+1 234 567 8902'
  }
];

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Downtown Apartment',
    description: 'Beautiful 2-bedroom apartment in the heart of downtown. Features include hardwood floors, stainless steel appliances, and a balcony with city views. Walking distance to restaurants, shops, and public transportation.',
    price: 350000,
    location: 'Downtown, New York',
    type: 'apartment',
    status: 'sale',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    images: [
      'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    ],
    agentId: '2',
    agentName: 'Sarah Smith',
    agentContact: '+1 234 567 8901',
    createdAt: new Date('2024-09-15')
  },
  {
    id: '2',
    title: 'Spacious Family Home',
    description: 'Charming 4-bedroom house with a large backyard perfect for families. Recently renovated kitchen, spacious living areas, and attached 2-car garage. Located in a quiet, family-friendly neighborhood with excellent schools.',
    price: 550000,
    location: 'Suburbia, California',
    type: 'house',
    status: 'sale',
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    ],
    agentId: '2',
    agentName: 'Sarah Smith',
    agentContact: '+1 234 567 8901',
    createdAt: new Date('2024-09-20')
  },
  {
    id: '3',
    title: 'Luxury Penthouse Suite',
    description: 'Stunning penthouse with panoramic views. Features 3 bedrooms, 3.5 bathrooms, chef\'s kitchen, and private rooftop terrace. Premium finishes throughout including marble countertops and floor-to-ceiling windows.',
    price: 1200000,
    location: 'Manhattan, New York',
    type: 'apartment',
    status: 'sale',
    bedrooms: 3,
    bathrooms: 3,
    area: 2800,
    images: [
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/2029665/pexels-photo-2029665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    ],
    agentId: '2',
    agentName: 'Sarah Smith',
    agentContact: '+1 234 567 8901',
    createdAt: new Date('2024-09-25')
  },
  {
    id: '4',
    title: 'Cozy Studio Apartment',
    description: 'Perfect starter home or investment property. Efficient studio layout with updated kitchen and bathroom. Excellent location near university campus and public transit. Great rental opportunity.',
    price: 1500,
    location: 'University District, Seattle',
    type: 'apartment',
    status: 'rent',
    bedrooms: 1,
    bathrooms: 1,
    area: 450,
    images: [
      'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    ],
    agentId: '2',
    agentName: 'Sarah Smith',
    agentContact: '+1 234 567 8901',
    createdAt: new Date('2024-09-28')
  },
  {
    id: '5',
    title: 'Prime Commercial Land',
    description: '5-acre plot zoned for commercial development. Excellent visibility from main highway with direct access. All utilities available. Perfect for retail, office, or mixed-use development.',
    price: 800000,
    location: 'Highway 101, Texas',
    type: 'land',
    status: 'sale',
    area: 217800,
    images: [
      'https://images.pexels.com/photos/221164/pexels-photo-221164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/259620/pexels-photo-259620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    ],
    agentId: '2',
    agentName: 'Sarah Smith',
    agentContact: '+1 234 567 8901',
    createdAt: new Date('2024-09-10')
  },
  {
    id: '6',
    title: 'Beachfront Villa',
    description: 'Luxurious 5-bedroom beachfront property with private beach access. Infinity pool, outdoor kitchen, and multiple entertaining spaces. Wake up to stunning ocean views every day.',
    price: 2500000,
    location: 'Malibu, California',
    type: 'house',
    status: 'sale',
    bedrooms: 5,
    bathrooms: 4,
    area: 4200,
    images: [
      'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    ],
    agentId: '2',
    agentName: 'Sarah Smith',
    agentContact: '+1 234 567 8901',
    createdAt: new Date('2024-09-05')
  },
  {
    id: '7',
    title: 'Mountain View Ranch',
    description: '10-acre ranch property with breathtaking mountain views. Main house plus guest cottage. Ideal for horses or hobby farming. Peaceful rural setting just 30 minutes from the city.',
    price: 950000,
    location: 'Boulder County, Colorado',
    type: 'house',
    status: 'sale',
    bedrooms: 3,
    bathrooms: 2,
    area: 2200,
    images: [
      'https://images.pexels.com/photos/2459/autumn-tree-landscape.jpg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    ],
    agentId: '2',
    agentName: 'Sarah Smith',
    agentContact: '+1 234 567 8901',
    createdAt: new Date('2024-08-30')
  },
  {
    id: '8',
    title: 'Urban Loft Space',
    description: 'Industrial-chic loft in converted warehouse. Open floor plan with exposed brick, high ceilings, and large windows. Modern amenities with historic charm in trendy arts district.',
    price: 2800,
    location: 'Arts District, Los Angeles',
    type: 'apartment',
    status: 'rent',
    bedrooms: 2,
    bathrooms: 2,
    area: 1400,
    images: [
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    ],
    agentId: '2',
    agentName: 'Sarah Smith',
    agentContact: '+1 234 567 8901',
    createdAt: new Date('2024-09-22')
  },
  {
    id: '9',
    title: 'Residential Development Land',
    description: '2-acre residential lot ready for development. Approved for subdivision into 8 lots. All impact fees paid. Prime location in growing suburban area with new schools and shopping.',
    price: 450000,
    location: 'Phoenix Metro, Arizona',
    type: 'land',
    status: 'sale',
    area: 87120,
    images: [
      'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    ],
    agentId: '2',
    agentName: 'Sarah Smith',
    agentContact: '+1 234 567 8901',
    createdAt: new Date('2024-09-12')
  },
  {
    id: '10',
    title: 'Historic Townhouse',
    description: 'Beautifully restored 3-story townhouse in historic district. Original hardwood floors, crown molding, and fireplace. Modern updates while maintaining period charm. Private courtyard garden.',
    price: 675000,
    location: 'Georgetown, Washington DC',
    type: 'house',
    status: 'sale',
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    images: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
    ],
    agentId: '2',
    agentName: 'Sarah Smith',
    agentContact: '+1 234 567 8901',
    createdAt: new Date('2024-09-18')
  }
];
