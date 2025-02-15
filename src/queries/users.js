import { User } from "@/model/user-model";

export async function createUser(user) {
  try{
    await User.create(user);
  } catch(e){
    throw new Error(e)
  }
}

// Get user from database by service
export const getUsersByService = async (serviceName) => {
  return await User.find({ service: serviceName }).select("-password").lean();
};


export async function getUsersByEmail(email) {
  return await User.findOne({ email }).select("-password").lean();
}

export async function updateUser(userEmail, updatedData) {
  return await User.findOneAndUpdate({ email: userEmail }, updatedData, { new: true });
}
