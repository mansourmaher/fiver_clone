"use server"

import { signIn } from "@/auth"
import { LoginSchema } from "@/schemas"
import { AuthError } from "next-auth"
import { z } from "zod"
import { getUserByEmail } from "@/data/user"


export const login=async(values:z.infer<typeof LoginSchema>)=>
{
    const validateFiels=LoginSchema.safeParse(values)
    if(!validateFiels.success)
    {
        return {error:"Invalid fields"}
    }
    const {email,password}=validateFiels.data
    const existingUser=await getUserByEmail(email)
    if(!existingUser || !existingUser.email || !existingUser.password)
    {
        return {error:"EMAIL DOES NOT EXIST"}
    }
     if(!existingUser.emailVerified)
     {
        
         console.log("sentmailof verifictaion")
         return {error:"Please verify your email before logging in. A new verification email has been sent to your email address."}


     }
    existingUser.emailVerified=false
    try{
        await signIn('credentials',{email,password,redirectTo:"/"})
        
        return {success:"Logged in"}
    }catch(error:any){
        if(error instanceof AuthError)
        {
            switch(error.type)
            {
                case"CredentialsSignin":
                return {error:"Invalid credentials"}
                default:
                return {error:"An error occurred"}
            }
        }
        throw error


    }

}