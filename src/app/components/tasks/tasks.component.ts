import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/service/tasks.service';
import { Task } from 'src/app/tasks';
import { TASKS } from './../../mock-tasks';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  
  constructor(private taskservice: TasksService) {    
   }

  ngOnInit(): void {
    //Like promese
    this.taskservice.getTasks().subscribe((task)=>(
      this.tasks = task ));
  }

  deleteTask(task: Task){
    this.taskservice.deleteTask(task)
      .subscribe(() => (
      this.tasks = this.tasks.filter( (t) => { 
        return t.id !== task.id}
      ))) 
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder
    this.taskservice.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task){
    this.taskservice.addTask(task).subscribe((task)=>(
      this.tasks.push(task)
    ));
  }
}
