import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

import { Customer } from "./model/customer-model";
import bcrypt from "bcryptjs";

export const { 
    handlers:{GET, POST}, 
    auth,
    signIn,
    signOut
} = NextAuth({
    session:{
        strategy:"jwt",
    },

    providers: [
        CredentialsProvider({
            async authorize (credentials) {
                if(credentials === null) return null;
                try{
                    const customer = await Customer.findOne({
                        username:credentials.username,
                    });

                    if( customer ){
                        const isMatch= await bcrypt.compare(
                            credentials.password, 
                            customer.password
                        );
                        
                        if(isMatch){
                            return customer;
                        }
                        else{
                            throw new Error("Invalid password");
                        }
                        return customer;
                    }

                    const employee = await Employee.findOne({
                        username:credentials.username
                    });

                    if( employee ){
                        const isMatch= await bcrypt.compare(
                            credentials.password, 
                            customer.password
                        );

                        if(isMatch){
                            return employee;
                        }
                        else{
                            throw new Error("Invalid password");
                        }
                        return employee;
                    }
                    else{
                        throw new Error("User not found");
                    }
                }catch(error){
                    throw new Error("Invalid credentials");
                }
            }
        }),

        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,

            authorization:{
                params:{
                    prompt:"consent",
                    access_type:"offline",
                    response_type:"code",
                }
            }
        }),

        GitHubProvider({
            clientId:process.env.GITHUB_CLIENT_ID,
            clientSecret:process.env.GITHUB_CLIENT_SECRET,

            authorization:{
                params:{
                    prompt:"consent",
                    access_type:"offline",
                    response_type:"code",
                }
            }
        })
    ],
  })