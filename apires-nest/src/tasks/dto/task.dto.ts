import { TaskStatus } from "../task.entity";
import { IsNotEmpty, IsOptional, IsString, MinLength, IsIn } from 'class-validator';

export class createTaskDto {
    
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    description: string;
};

export class updateTask {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;
    
    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
    status?: TaskStatus;
}