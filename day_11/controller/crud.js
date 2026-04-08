import dbConnect from '../config/db.js';
import User from '../models/Users.js';
dbConnect();
export const createUser = async (user) => {
    try {
        const createdUser = await User.create(user);
        return {status:200, message:"User has been created successfully"};
    } catch (error) {
        return{status:500, message: `unable to create ${user.email}, error:${error.message}`};
    }
}
// createUser({name:"sahil", email:"xyz@gmail.com", password:"12345", gender:"M"});

export const readUsers = async (req,res) => {
    try {
        const users = await User.find();
        res.status(200).json({data: users, message:"successfull"});
    } catch (error) {
        res.status(500).json({ message: `unable to read, error: ${error.message} `});
    }
}

// readUsers();

export const updateUser = async (email, userDetails) => {
    try {
        await User.updateOne({email: email}, {$set: userDetails});
        return {status:200, message: "user has been upated syuccessfully"}
    } catch (error) {
        return{status:500, message: `unable to update, error: ${error.message} `};
    }
}

// updateUser("abc@gmail.com", {password:"abc123"});

export const deleteUser = async (email) => {
    try {
        const deletedUser = await User.findOneAndDelete({ email: email});
        return deletedUser ? {status:200, message:"user has been deleted"} : {status:404, message:"User not exist"};
    } catch(error) {
        return{status:500, message: `unable to update, error: ${error.message} `};
    }
}

deleteUser("xyz@gmail.com");