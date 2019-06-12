import * as mongoose from 'mongoose';
import User from "./user.interface";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type: String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    password : {
        type : String,
        required : true
    }
}, {
    timestamps : true
}); 




const modelUser = mongoose.model<User & mongoose.Document>('User', userSchema);

export default modelUser;