import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: 'https://res.cloudinary.com/djw5h4art/image/upload/v1635635594/avatars/avatar-1_ozxv9z.png',}
    }, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;