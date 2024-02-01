import { mongoose, Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
    });

// Hash the password before saving it to the database
userSchema.pre('save', async function (next) {
    try {
        const user = this;
        if (!user.isModified('password')) return next();

        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        return next();
    } catch (err) {
        return next(err);
    }
});

const User = mongoose.models.User || model('User', userSchema)
export default User;
