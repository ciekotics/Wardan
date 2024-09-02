import { z } from "zod";

export const newBlogsSchema = z.object({
  title: z.string().min(15, { message: 'Title is required' }).max(25, {  message: 'Enter a Valid Title' }),
  description: z.string().min(45, { message: 'Enter a Valid Description' }).max(60, {  message: 'Enter a Valid Description' }).optional(),
  smallParagraph: z.string().min(50, { message: 'Enter a Valid Paragraph' }).max(100, {  message: 'Enter a Valid Paragraph' }).optional(),
  longParagraph: z.string().min(350, { message: 'Enter a Valid Text' }).max(800, {  message: 'Enter a Valid Text' }),
})