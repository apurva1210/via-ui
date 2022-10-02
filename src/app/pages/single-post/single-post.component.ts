import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  postData: any;
  similarPostsArray: Array<any> | undefined;

  constructor(private route: ActivatedRoute, private postService: PostsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(val => {
      console.log(val)
      this.postService.loadPostById(val['id']).subscribe(post => {
        console.log(post)
          this.postData = post;
        this.loadSimilarPost(this.postData.category.categoryId);
      })
    });
  }

  loadSimilarPost(categoryId: string){
    this.postService.loadSimilar(categoryId).subscribe(value => {
        this.similarPostsArray = value;
    });
  }

}
