import * as z from 'zod';


export const LoginSchema = z.object({
    email: z.string().email({message: "Please enter a valid email"}),
    
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long"

    })
})
export const RegisterSchema = z.object({
    email: z.string().email({message: "Please enter a valid email"}),
    
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long"

    }),
    name: z.string().min(3, {
        message: "Name must be at least 3 characters long"

}),
    role: z.string().min(0, {
        message: "Please select a role"
    })


})