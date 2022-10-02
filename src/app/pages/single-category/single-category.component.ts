import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.scss']
})
export class SingleCategoryComponent implements OnInit {

  postArray: Array<any> | undefined;
  categoryObj: any;

  constructor(private route: ActivatedRoute, private postService: PostsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(val => {
      this.categoryObj = val;
      this.postService.loadCategoryPosts(val['id']).subscribe(post => {
        this.postArray = post;
      });
    })
  }

}
