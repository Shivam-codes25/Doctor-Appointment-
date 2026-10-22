import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log("Database Connected"));
    
    // Ensure this line ONLY passes the environment variable and nothing else!
    await mongoose.connect(`${process.env.MONGODB_URI}`);
};

export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.