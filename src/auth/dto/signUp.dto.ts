import { IsNotEmpty, IsString, IsStrongPassword, IsEmail } from "class-validator";

export class SignUp {

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email : string

    @IsNotEmpty()
    @IsString()
    @IsStrongPassword()
    password : string
}