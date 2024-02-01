import sendResponse from "@/helpers/sendResponse";
import User from "@/lib/models/user.model";
import connectMongoDB from "@/lib/mongodb";
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
    await connectMongoDB();

    switch (req.method) {
        case 'POST':
            try {
                const { action, userName, password } = req.body;

                if (action === 'register') {
                    // Register new user

                    const findAllUsers = await User.find();
                    if (findAllUsers?.length > 0) {
                        return sendResponse(res, {
                            success: false,
                            statusCode: 400,
                            message: "Max User Exceeded!!!",
                            data: null
                        });
                    }

                    // Check if the username already exists
                    const existingUser = await User.findOne({ userName });
                    if (existingUser) {
                        return sendResponse(res, {
                            success: false,
                            statusCode: 400,
                            message: "Username is already taken. Please choose a different one.",
                            data: null
                        });
                    }

                    // Create a new user instance
                    const newUser = new User({
                        userName,
                        password,
                    });

                    // Hash the password before saving
                    newUser.password = await bcrypt.hash(newUser.password, 10);

                    // Save the user to the database
                    await newUser.save();

                    // Send response without password
                    const userWithoutPassword = { ...newUser._doc };
                    delete userWithoutPassword.password;

                    return sendResponse(res, {
                        success: true,
                        statusCode: 201,
                        message: "User registered successfully",
                        data: userWithoutPassword
                    });
                } else if (action === 'login') {
                    // Login user

                    // Find the user by username
                    const user = await User.findOne({ userName });

                    if (!user) {
                        return sendResponse(res, {
                            success: false,
                            statusCode: 401,
                            message: "Authentication failed. User not found.",
                            data: null
                        });
                    }

                    // Compare the provided password with the hashed password stored in the database
                    const passwordMatch = await bcrypt.compare(password, user.password);

                    if (!passwordMatch) {
                        return sendResponse(res, {
                            success: false,
                            statusCode: 401,
                            message: "Authentication failed. Invalid password.",
                            data: null
                        });
                    }

                    // Send response without password
                    const userWithoutPassword = { ...user._doc };
                    delete userWithoutPassword.password;

                    return sendResponse(res, {
                        success: true,
                        statusCode: 200,
                        message: "Login successful",
                        data: userWithoutPassword
                    });
                } else {
                    return sendResponse(res, {
                        success: false,
                        statusCode: 400,
                        message: "Invalid action. Supported actions: 'register' or 'login'.",
                        data: null
                    });
                }
            } catch (error) {
                console.error("error --->", error);
                return sendResponse(res, {
                    success: false,
                    statusCode: 500,
                    message: "Internal Server Error",
                    data: null
                });
            }

        default:
            return sendResponse(res, {
                success: false,
                statusCode: 404,
                message: "Method Not Found!!!",
                data: null
            });
    }
}
