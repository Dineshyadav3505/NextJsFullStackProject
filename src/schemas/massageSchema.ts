import { z } from 'zod'

export const messageSchema = z.object({
    content: z
    .string()
    .min(1, 'Message must have at least 1 character')
    .max(300, 'Message must be no longer then 300 character')
})