import { ConflictException, Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDTO } from './dto/user.dto';
import { Users } from '@prisma/client';
import * as bcrypt from "bcrypt";

@Injectable()
export class UsersService {
    
    constructor(private readonly repository: UsersRepository) { }
    
    async create(userDto: CreateUserDTO){
        const { email } = userDto;
        const userEmail = await this.repository.checkEmail(email);
        if (userEmail) throw new ConflictException("email already exist.");


        return await this.repository.create(userDto);
    }

    async checkEmail(email:string){
        return await this.repository.checkEmail(email);
    }

    async isMatchForPassword(user: Users, password: string) {
        return bcrypt.compareSync(password, user.password);
    }
}
