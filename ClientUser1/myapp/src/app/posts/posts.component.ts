import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
  userPost: User = new User();
  constructor(private http: HttpClient) { }
  sub: Subscription = new Subscription();
  addPosts: boolean = true;

  ngOnInit(): void {
  }

  reload() {
    window.location.reload();
  }

  updateGeneral() {
    this.sub = this.http
      .put('http://localhost:8000/api/users1/' + this.userPost._id, this.userPost)
      .subscribe((status) => {
        alert(status);
        window.location.reload();
      });
  }

  update(title: string, newBody: string) {
    if (title != '' && newBody != '') {
      let obj = { post_title: title, body: newBody };
      this.userPost.posts.push(obj);
      this.updateGeneral();
    }
    else {
      alert("One or more fields are empty!")
    }
    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
