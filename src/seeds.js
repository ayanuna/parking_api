import mongoose from 'mongoose';
import User from './models/User'; // Adjust the path as necessary

const seedUsers = async () => {
  try {
    // Connect to the MongoDB database
    await mongoose.connect('mongodb+srv://dbproject:free123@cluster0.ep4gbre.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log('Database connected!');

    // Dummy data
    const users = [
      
      {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: '1234',
        roles: ['admin'],
        coordinates: ['37.774929', '-122.419418'],
        vehicles: [],
        reservations: [],
      },
    ];

    // Clear the User collection
    await User.deleteMany({});

    // Insert dummy data into the User collection
    await User.insertMany(users);

    console.log('Dummy data inserted successfully!');

    // Disconnect from the database
    await mongoose.disconnect();
    console.log('Database disconnected!');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};

// Run the seed function
seedUsers();
