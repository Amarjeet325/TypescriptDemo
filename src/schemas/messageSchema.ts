import { z } from "zod";



 export const messageSchema = z.object({
    content:z.string().min(10,"messages should be atleast 10 charector")
    .max(200,"maximum content should bhi 200 charectors")

});