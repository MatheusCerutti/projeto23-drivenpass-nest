import { IsNotEmpty, IsString, IsStrongPassword, IsEmail } from "class-validator";

export class SignIn {

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email : string

    @IsNotEmpty()
    @IsString()
    @IsStrongPassword()
    password : string
}