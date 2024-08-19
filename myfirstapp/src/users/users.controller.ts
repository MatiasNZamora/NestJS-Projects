import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('/users')
@Controller('/users')
export class UsersController {
    constructor( private usersServis:UsersService ){}

    @Get()
    getUsers(){
        return this.usersServis.getUsers();
    };

    @Post()
    createUser( @Body() user: CreateUserDto ){
        return this.usersServis.createUsers(user);
    };

};
