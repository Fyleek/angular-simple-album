import { Component, OnInit, Input } from '@angular/core';

class Post {
  title!: string;
  description!: string;
  picture!: string;
  like!: number;
} 

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  hearthComplete = false;
  @Input() post!: Post;

  addLike(){
    this.post.like++;
    this.hearthComplete = true;
  };

  constructor() { }

  ngOnInit(): void {
  }


}
