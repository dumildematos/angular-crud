import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post, CreatePost } from '../models/post';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  limit = 3;
  constructor(private http: HttpClient) { }

  // Getting all Posts
  getPosts(): Observable<Post[]> {
    const crrUrl = `${this.url}/?_limit=${this.limit}`;
    return this.http.get<Post[]>(crrUrl);
  }
  getPostsbyLimit(n): Observable<Post[]> {
    this.limit = n;
    const crrUrl = `${this.url}/?_limit=${this.limit}`;
    return this.http.get<Post[]>(crrUrl);
  }
  // Getting a single Post
  getPost(id): Observable<Post> {
    const crrUrl = `${this.url}/${id}`;
    return this.http.get<Post>(crrUrl);
  }

  // Creating post
  createPost(body: CreatePost): Observable<any> {
    return this.http.post(this.url, body, httpOptions);
  }

  // Deleting Post
  deletePost(id): Observable<any> {
    const crrUrl = `${this.url}/${id}`;
    return this.http.delete<any>(crrUrl);
  }

  // Updating Post
  updatePost(id, body: CreatePost): Observable<any> {
    const crrUrl = `${this.url}/${id}`;
    return this.http.put(crrUrl, body, httpOptions);
  }

}
