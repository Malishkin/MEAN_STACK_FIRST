import { HttpClient } from '@angular/common/http';
import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  sub: Subscription = new Subscription();
  sub1: Subscription = new Subscription();
  users: User[] = [];
  filteredUsers: User[] = [];
  userData: User = new User();
  isVisiable: boolean = false;
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.sub = this.http.get<User[]>("http://localhost:8000/api/users1").subscribe(data => {
      this.users = data;
      this.filteredUsers = data;
      
      
    });
  }

  search(text : string)
  {
    if (text == "") {
      this.filteredUsers = [...this.users]
    }

    else {
      this.filteredUsers =  this.users.filter(x => x.full_name.toLowerCase().includes(text.toLowerCase()))
      
    }
    
  }

  create() {
    this.sub1 = this.http.post("http://localhost:8000/api/users1", this.userData).subscribe(status => {
      alert(status);
      window.location.reload();

    })
    
  }
  
  reload() {
    window.location.reload();
  }




  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub1.unsubscribe();
  }

}
