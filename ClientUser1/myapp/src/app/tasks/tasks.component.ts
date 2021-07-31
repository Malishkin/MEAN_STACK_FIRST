import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  @Input()
  userTask: User = new User();
  newTaskCompleted: boolean = false;
  sub: Subscription = new Subscription();
  isClicked: boolean = true;
 

  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  updateGeneral() {
    this.sub = this.http
      .put('http://localhost:8000/api/users1/' + this.userTask._id, this.userTask)
      .subscribe((status) => {
        alert(status);
        window.location.reload();
      });
  }

  update(titleNew: string) {
    
    if (titleNew != "") {
      let obj = { title: titleNew, completed: false };
      this.userTask.todos.push(obj);
    
    
    this.updateGeneral();
    }
    else {
      alert("The field id empty!")
    }


    
  }

  reload() {
    window.location.reload();
  }

  

}
