import { z } from "zod";

export const usernameValidation=z.string()
.min(2,"Username must be atleast 2 charecter containts")
.min(20,"Username must be atleast 20 charecter containts")
.regex(/^[a-za-z0-9_]/,"Username must not contained any special charecter")

export  const signUpschema = z.object({
  username: usernameValidation,
  email:z.string().email({message:"Invalis email"}),
  password:z.string().min(6,{message:"minimum 6 charector involved"})
});
