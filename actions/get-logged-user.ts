"use server"

import { auth } from "@/auth"
import { db } from "@/lib/db"

export async function getLoggedUser(){
    try{
        const useri=await auth()
        const userId=useri?.user.id
        console.log("userId",userId)
        if(!userId)
        {
            return null
        }
        const user=await db.user.findFirst({where:{id:userId}})
        return user
    }catch(e)
    {
        return null
    }
}