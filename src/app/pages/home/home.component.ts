import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  featuredPosts: Array<any> = [];
  latestPosts: Array<any> = [];

  constructor(private postService: PostsService) {}

  ngOnInit(): void {

    this.postService.loadFeatured().subscribe(value => {
     this.featuredPosts = value;
    });

    this.postService.loadLatest().subscribe(value => {
      this.latestPosts = value;
    });
  }

}
