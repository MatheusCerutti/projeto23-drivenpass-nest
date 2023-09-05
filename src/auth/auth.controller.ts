import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { SignUp } from './dto/signUp.dto';
import { SignIn } from './dto/signIn.dto';
import { AuthService } from './auth.service';

@Controller('users')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('sign-up')
    signUp(@Body() signUpDto: SignUp) {
        return this.authService.signUp(signUpDto)
    }

    @Post('sign-in')
    @HttpCode(HttpStatus.OK)
    signIn(@Body() signIn: SignIn) {
        return this.authService.signIn(signIn)
    }
}
