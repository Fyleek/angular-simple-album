import { Injectable } from '@angular/core';
import { Post } from './types';
import { POSTS } from './posts';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  serverUrl = 'https://my-json-server.typicode.com';
  postsPath = '/bhubr/album-api/posts';

  constructor(
    private http: HttpClient
  ) { }

  getAllPosts(): Promise<Post[]> {
    return this.http
      .get<Post[]>(
        `${this.serverUrl}${this.postsPath}`
      )
      .toPromise();
  }

  getPost(id: number): Post | undefined {
    return POSTS.find(item => id === item.id);
  }
}
