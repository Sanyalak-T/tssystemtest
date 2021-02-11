import { Component, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';

import {Post} from '../models/post.model';
import {PostsService} from '../../services/posts.service';

@Component({
 selector: 'app-employee-list',
 templateUrl: './employee-list.component.html',
 styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit{

  // employees = [
  //   {title: 'sanyalak tumsuwun1', content: 'test expansion1'},
  //   {title: 'sanyalak tumsuwun2', content: 'test expansion2'},
  //   {title: 'sanyalak tumsuwun3', content: 'test expansion3'}
  // ];
  posts: Post[] = [];
  private postsSub : Subscription;

  constructor(public postService: PostsService) {}

  ngOnInit(){
    this.posts = this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdateListener()
      .subscribe((posts: Post[])=>{
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
