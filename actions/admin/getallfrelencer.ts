"use server"

import { db } from "@/lib/db"



export async function getallfrelencer()
{
    const frelencers=await db.user.findMany(
        {
            where:{
                role:"FREELANCER"
            }
        }
    )
    return frelencers
}

export async function getallclient()
{
    const clients=await db.user.findMany(
        {
            where:{
                role:"CLIENT"
            }
        }
    )
    return clients
}