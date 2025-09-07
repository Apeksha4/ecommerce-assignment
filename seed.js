const mongoose = require('mongoose');
const Product = require('./models/Product');
const config = require('./config');

const sampleProducts = [
  {
    name: 'iPhone 15 Pro',
    description: 'Latest iPhone with advanced camera system and A17 Pro chip',
    price: 999,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop',
    stock: 50,
    rating: 4.8
  },
  {
    name: 'MacBook Air M2',
    description: 'Ultra-thin laptop with M2 chip for incredible performance',
    price: 1199,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop',
    stock: 30,
    rating: 4.9
  },
  {
    name: 'Nike Air Max 270',
    description: 'Comfortable running shoes with Max Air cushioning',
    price: 150,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
    stock: 100,
    rating: 4.5
  },
  {
    name: 'Levi\'s 501 Jeans',
    description: 'Classic straight-fit jeans in authentic denim',
    price: 89,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop',
    stock: 75,
    rating: 4.3
  },
  {
    name: 'The Great Gatsby',
    description: 'Classic American novel by F. Scott Fitzgerald',
    price: 12,
    category: 'books',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop',
    stock: 200,
    rating: 4.7
  },
  {
    name: 'Harry Potter Complete Set',
    description: 'All 7 books in the Harry Potter series',
    price: 89,
    category: 'books',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    stock: 50,
    rating: 4.9
  },
  {
    name: 'Instant Pot Duo',
    description: '7-in-1 electric pressure cooker for quick meals',
    price: 99,
    category: 'home',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop',
    stock: 40,
    rating: 4.6
  },
  {
    name: 'Yoga Mat Premium',
    description: 'Non-slip yoga mat with carrying strap',
    price: 45,
    category: 'sports',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop',
    stock: 80,
    rating: 4.4
  },
  {
    name: 'Wireless Bluetooth Headphones',
    description: 'Noise-cancelling headphones with 30-hour battery life',
    price: 199,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
    stock: 60,
    rating: 4.5
  },
  {
    name: 'Organic Skincare Set',
    description: 'Complete skincare routine with natural ingredients',
    price: 79,
    category: 'beauty',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop',
    stock: 35,
    rating: 4.2
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('🗑️  Cleared existing products');

    // Insert sample products
    await Product.insertMany(sampleProducts);
    console.log(`✅ Inserted ${sampleProducts.length} sample products`);

    console.log('\n🎉 Database seeded successfully!');
    console.log('\n📦 Sample Products Added:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    sampleProducts.forEach(product => {
      console.log(`📱 ${product.name} - $${product.price} (${product.category})`);
    });
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
