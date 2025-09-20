import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from '../models/post-model';

@Injectable()
export class PostService {
  private apiUrl = 'https://localhost:7198/trainee';

  constructor(private http: HttpClient) { }

  createPost(post: PostModel): Observable<PostModel> {
    return this.http.post<PostModel>(this.apiUrl, post);
  }
}
