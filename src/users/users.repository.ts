import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from "bcrypt";
import { CreateUserDTO } from './dto/user.dto';

@Injectable()
export class UsersRepository {

    private SALT = 10;
    constructor(private readonly prisma: PrismaService) { }
    
    create(userDto: CreateUserDTO){
        return this.prisma.users.create({
            data:{
                ...userDto,
                password: bcrypt.hashSync(userDto.password, this.SALT)
            }
        })
    }

    checkEmail(email: string) {
        return this.prisma.users.findFirst({
            where: { email }
        })
    }
}