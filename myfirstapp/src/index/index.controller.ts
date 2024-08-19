import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query } from '@nestjs/common';
import { ValidateuserPipe } from './pipe/validateuser/validateuser.pipe';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('index')
@Controller()
export class IndexController {

    @Get('index')
    index(){
        return 'hellow world'
    };

    @Get('notfound')
    @HttpCode(404)
    notFoundPage(){
        return '404 not found'
    };

    @Get('ticket/:num')
    getNumber( @Param( 'num', ParseIntPipe ) num: number ){
        return num + 14 ;
    };

    @Get('active/:status')
    isUserActive( @Param('status', ParseBoolPipe ) status: boolean ){
        console.log(typeof(status));
        return status;
    }

    @Get()
    greet(@Query(ValidateuserPipe) query: { name: string, age: number }){
        return `Hello ${query.name}, you are ${query.age} years old`;
    }

};