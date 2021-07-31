import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input()
  user: User = new User();

  sub: Subscription = new Subscription();
  sub1: Subscription = new Subscription();
  sub2: Subscription = new Subscription();
  
  

  isExist: boolean = false;
  tasksCompleted: boolean = false;
  isClicked: boolean = false;
  addTodos: boolean = false;
  addPosts: boolean = false;
  taskCompleted: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.user.todos.forEach((task) => {
      if (task.completed) {
        this.taskCompleted = true;

        this.tasksCompleted = true;
      } else {
        this.tasksCompleted = false;
        this.taskCompleted = false;
      }
    });
  }

  update() {
    this.sub = this.http
      .put('http://localhost:8000/api/users1/' + this.user._id, this.user)
      .subscribe((status) => {
        alert(status);
        window.location.reload();
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    
  }

  delete() {
    this.sub1 = this.http
      .delete('http://localhost:8000/api/users1/' + this.user._id)
      .subscribe((status1) => {
        alert(status1);
        window.location.reload();
      });
  }

  markCompleted(id: string) {

    
    let fuckingTask = this.user.todos.find(x => x._id == id);
    fuckingTask.completed = true.toString();
    this.update();
    
    
    
 
    
  }
}
