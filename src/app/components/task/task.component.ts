import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/service/tasks.service';
import { Task } from 'src/app/tasks';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  
  constructor(private taskservice: TasksService) {    
   }

  ngOnInit(): void {
    //Like promese
    this.taskservice.getTasks().subscribe((tasks)=>(
      this.tasks = tasks
    ));
    
  }
}
