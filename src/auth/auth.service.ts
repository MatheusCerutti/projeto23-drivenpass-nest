import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignUp } from './dto/signUp.dto';
import { UsersService } from 'src/users/users.service';
import { SignIn } from './dto/signIn.dto';
import { Users } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UsersService) { }


    async signUp(SignUpDto: SignUp) {
        return await this.userService.create(SignUpDto);
    }

    async signIn(SignInDto: SignIn){
        const {email, password} = SignInDto;

        const user = await this.userService.checkEmail(email);
        if(!user) throw new UnauthorizedException("Email or password incorrect. Try again.");

        const isMatch = this.userService.isMatchForPassword(user,password);
        if(!isMatch) throw new UnauthorizedException("Email or password incorrect. Try again.");

        return this.createToken(user);
    }

    private createToken(user: Users) {
        const { id, email } = user;

        const token = this.jwtService.sign({email},{
            expiresIn: "1 day",
            subject: String(id),
            issuer: "Driven",
            audience: "Drivenpass"
        })

        return { token };
    }
}
