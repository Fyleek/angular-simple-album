import { Component, OnInit, Input } from '@angular/core';

class Post {
  title!: string;
  description!: string;
  picture!: string;
} 

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() post!: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
