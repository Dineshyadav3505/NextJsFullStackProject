import mongoose,{Schema, Document} from "mongoose";

export interface Message extends Document {
    content : string;
    createdAt : Date;
}

const messageSchema: Schema<Message>  = new Schema({
    content : 
    {
        type: String, 
        required: true
    },
    createdAt : 
    {
        type: Date, 
        default: Date.now,
        required: true,
    }
});

export interface User extends Document {
    username : string;
    email : string;
    password : string;
    verifyCode : string;
    verifyCodeExpiry : Date;
    isVerified : boolean;
    isAcceptingMessage : boolean;
    messages : Message[];
}

const userSchema: Schema<User> = new Schema({
    username : 
    {
        type: String, 
        required: [true, "Username is required"],
        trim: true,
        unique: true
    },
    email : 
    {
        type: String, 
        required: [true, "Email is required"],
        unique: true,
        match: [/\S+@\S+\.\S+/, "Please enter a valid email address"]
    },
    password : 
    {
        type: String, 
        required: true,
        minlength: [8, "Password must be at least 8 characters long"],
        maxlength: [20, "Password must be at most 20 characters long"]     
    },
    verifyCode : 
    {
        type: String, 
        required: [true, "Verification code is required"]
    },
    verifyCodeExpiry : 
    {
        type: Date, 
        required: [true, "Verification code expiry date is required"]
    },
    isVerified : 
    {
        type: Boolean, 
        default: false
    },
    isAcceptingMessage : 
    {
        type: Boolean, 
        default: true
    },
    messages : [messageSchema]
});

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", userSchema);

export default UserModel;


