"use server"

import { db } from "@/lib/db"



export async function gettheapplyinjobbijonid(jobId:string) {

    const apply=await db.jobApplication.findMany({
        where:{
            jobId:jobId
        },
        include:{
            job:true,
            user:true
        }
    })
    return apply;
  
}