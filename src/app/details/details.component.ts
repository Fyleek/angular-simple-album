import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { POSTS } from '../posts';
import { Post } from '../types';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  post?: Post;

  constructor(private route: ActivatedRoute, private location: Location, private postService: PostService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.postService.getPost(id);
  }

}
