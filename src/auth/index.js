import { getSession, signIn as nextAuthSignIn, signOut as nextAuthSignOut } from "next-auth/react";

export async function auth() {
    const session = await getSession();
    return session;
}

export async function signIn(provider, options) {
    await nextAuthSignIn(provider, options);
}

export async function signOut(options) {
    await nextAuthSignOut(options);
}