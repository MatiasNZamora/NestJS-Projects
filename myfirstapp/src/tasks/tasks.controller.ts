import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('/tasks')
@Controller('/tasks')
export class TaskController {
    taskservice:TasksService;

    constructor(tasksService:TasksService){
        this.taskservice = tasksService;
    }

    @Get()
    @ApiOperation({ summary:'Get all tasks' })
    @ApiResponse({ status:200, description:'Return all tasks.' })
    @ApiResponse({ status:403, description:'Forbidden.' })
    getAllTasks( @Query() query:any ){
        console.log(query)
        return this.taskservice.getTasks();
    };

    @Get('/:id') //task/:id
    getTask( @Param('id') id:string ){
        return this.taskservice.getTask(parseInt(id));
    };

    @Post()
    @ApiOperation({ summary:'Create a task' })
    // @UsePipes(new ValidationPipe()) //valida el pipe y al validarlo usa el DTO
    createTask( @ Body() task: CreateTaskDto ){
        return this.taskservice.createTask(task);
    };

    @Put()
    updateTask( @Body() task: UpdateTaskDto ){
        return this.taskservice.updateTask(task);
    };

    @Delete()
    deleteTask(){
        return this.taskservice.deleteTask();
    };

    @Patch()
    updateTaskStatus(){
        return this.taskservice.updateTaskStatus();
    };


};