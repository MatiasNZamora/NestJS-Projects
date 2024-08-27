import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 as uuid } from 'uuid';
import { updateTask } from './dto/task.dto';

@Injectable()
export class TasksService {

    private tasks: Task[] = [
        {
            id: '1',
            title: 'first task',
            description: 'some task',
            status: TaskStatus.PENDING,
        },
    ];

    getAllTask(){
        return this.tasks;
    };

    getTaskById( id:string ):Task {
        return this.tasks.find(task => task.id === id )
    };
    
    CreateTask( title: string, description: string ){
        const task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.PENDING
        }

        this.tasks.push(task);

        return task;
    };
    
    UpdateTask( id:string, updatedFilds: updateTask ):Task {
        const task = this.getTaskById(id); //buscamos la tarea 
        const newTask = Object.assign(task, updatedFilds); // con el Object.assign remplazamos los valores que se encuentren modificados.
        this.tasks.map(task => task.id === id ? newTask : task) //Utilizando el operador ternario evaluamos si viene el id correcto remplazamos los valores sino la dejamos como esta
        return newTask
    };
    
    deleteTask( id: string ) {
        this.tasks = this.tasks.filter(task => task.id !== id)
    };

};
