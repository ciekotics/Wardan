import { z } from "zod";

export const newBlogsSchema = z.object({
  title: z.string().min(10, { message: 'Title is required' }).max(15, {  message: 'Enter a Valid Title' }),
  description: z.string().min(15, { message: 'Enter a Valid Description' }).max(35, {  message: 'Enter a Valid Description' }).optional(),
  smallParagraph: z.string().min(25, { message: 'Enter a Valid Paragraph' }).max(50, {  message: 'Enter a Valid Paragraph' }).optional(),
  longParagraph: z.string().min(150, { message: 'Enter a Valid Text' }).max(200, {  message: 'Enter a Valid Text' }),
})