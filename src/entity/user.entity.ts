
import mongoose from "mongoose";

/**
 * 
 */


export interface UserDetails {
    user_id: String;
    user_status: String;
    user_name: String;
}

const userDetailsSchema = new mongoose.Schema<UserDetails>({
    user_id: { type: String, required: true },
    user_status: { type: String, required: true },
    user_name: { type: String, required: false },

}, {
    timestamps: true
})


const UserDetailsModel = mongoose.model<UserDetails>('user_details', userDetailsSchema);

export default UserDetailsModel;