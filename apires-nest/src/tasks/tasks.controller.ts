import { Body, Controller, Get, Post, Delete, Param, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDto, updateTask } from './dto/task.dto';

@Controller('/tasks')
export class TasksController {

    constructor( private taskservice: TasksService ){ } // injeccion de dependenicas 

    @Get()
    getAllTasks(){
        return this.taskservice.getAllTask();
    };

    @Post()
    createTask( @Body() newTask: createTaskDto ){
        console.log(newTask)
        return this.taskservice.CreateTask( newTask.title, newTask.description );
    };

    @Patch(':id')
    updateTask( @Param('id') id:string, @Body() updateFinelds: updateTask){
        return this.taskservice.UpdateTask( id, updateFinelds ) ;
    };

    @Delete(':id')
    deleteTask(@Param('id') id:string ){
        this.taskservice.deleteTask(id);
    };
};
