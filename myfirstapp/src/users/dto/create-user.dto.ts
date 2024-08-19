import { IsEmail, IsNotEmpty, IsNumber, IsString, Max } from "class-validator";


export class CreateUserDto {
    
    @IsString()
    @IsNotEmpty() 
    name: string;
    
    // @Max(100)
    // @IsNumber()
    // age: number;
    
    @IsEmail()
    @IsString()
    @IsNotEmpty() 
    email: string;
    
    @IsString()
    @IsNotEmpty() 
    password: string;
}