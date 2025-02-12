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
