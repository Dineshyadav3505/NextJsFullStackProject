import {z} from 'zod'
import UserModel from '../models/User'

export const  usernameValidation = z
    .string()
    .min(5,  'usernameValidation must be at least 5 characters long')
    .max(20, 'usernameValidation must be at most 20 characters long')
    .regex( /^[a-zA-Z0-9_]+$/ , 'usernameValidation must contain only letters and numbers')

export const UserSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message :"invalid email"}),
    password: z.string().min(8,{message: 'Password have more then 7 words'}).max(20, {message: 'Password have less then 21 words'}),
})