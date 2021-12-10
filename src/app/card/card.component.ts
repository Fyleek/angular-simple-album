import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  hearthComplete = false;
  @Input() post!: Post;

  addLike(){
    if(!this.post.like) this.post.like = 0;
    this.post.like++;
    this.hearthComplete = true;
  };

  constructor() { }

  ngOnInit(): void {
  }


}
