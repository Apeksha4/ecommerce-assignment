// Mock data for frontend-only deployment
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 99.99,
    description: 'High-quality wireless headphones with noise cancellation',
    image: 'https://via.placeholder.com/300x200?text=Headphones',
    category: 'Electronics'
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 199.99,
    description: 'Advanced smartwatch with health monitoring features',
    image: 'https://via.placeholder.com/300x200?text=Smart+Watch',
    category: 'Electronics'
  },
  {
    id: '3',
    name: 'Laptop Stand',
    price: 49.99,
    description: 'Adjustable laptop stand for better ergonomics',
    image: 'https://via.placeholder.com/300x200?text=Laptop+Stand',
    category: 'Accessories'
  },
  {
    id: '4',
    name: 'Mechanical Keyboard',
    price: 129.99,
    description: 'RGB mechanical keyboard with customizable switches',
    image: 'https://via.placeholder.com/300x200?text=Keyboard',
    category: 'Electronics'
  },
  {
    id: '5',
    name: 'Gaming Mouse',
    price: 79.99,
    description: 'High-precision gaming mouse with customizable buttons',
    image: 'https://via.placeholder.com/300x200?text=Gaming+Mouse',
    category: 'Electronics'
  },
  {
    id: '6',
    name: 'USB-C Hub',
    price: 39.99,
    description: 'Multi-port USB-C hub for laptops and tablets',
    image: 'https://via.placeholder.com/300x200?text=USB+Hub',
    category: 'Accessories'
  }
];

export const mockUser: User = {
  id: '1',
  name: 'Demo User',
  email: 'demo@example.com'
};

// Mock API functions
export const mockApi = {
  // Simulate login
  login: async (email: string, password: string): Promise<{ token: string; user: User }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          token: 'mock-jwt-token',
          user: mockUser
        });
      }, 1000);
    });
  },

  // Simulate register
  register: async (name: string, email: string, password: string): Promise<{ token: string; user: User }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          token: 'mock-jwt-token',
          user: { ...mockUser, name, email }
        });
      }, 1000);
    });
  },

  // Get products
  getProducts: async (): Promise<Product[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 500);
    });
  }
};
