import { Component, OnInit } from '@angular/core';
import { AddService } from 'src/app/service/add.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  title:string = 'Mi lista de Tareas';
  showAddTask: boolean = true;
  suscription?: Subscription

  constructor(
    private addService: AddService,
    private router: Router
  ) {
    this.suscription = this.addService.onToggle().subscribe
    (value => this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.addService.toggleAddTask();
  }

  hasRouter(route: string){
    return this.router.url === route;
  }
}
