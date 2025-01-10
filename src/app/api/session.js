// filepath: /c:/Users/visha/Desktop/Projects/fixit/src/pages/api/session.js
import { auth } from "@/auth";

export default async function handler(req, res) {
    const session = await auth();
    res.status(200).json({ session });
}