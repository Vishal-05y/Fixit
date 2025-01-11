'use server'

import { signIn , signOut } from "@/auth";
import { redirect } from "next/dist/server/api-utils";

export async function doSocialSignIn(formData){
    const action = formData.get('action');
    if (!action) {
        throw new Error('Action is required');
    }
    await signIn(action, { redirectTo: "/profileHome" });
    console.log(action);
}

export async function doSignOut(){
    await signOut({ redirectTo: '/' });
}

export async function doCredentialSignIn(formData){
    try {
        const response = await signIn('credentials', {
            username: formData.get('username'),
            password: formData.get('password'),
            redirect: false,
        });
        return response;
    } catch (error) {
        throw new Error(error);
    }
}
