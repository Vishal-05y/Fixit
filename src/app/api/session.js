import { auth } from "@/auth";

export default async function handler(req, res) {
    const session = await auth();
    res.status(200).json({ session });
}