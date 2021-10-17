import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlogUser } from './bloguser';

@Injectable({
  providedIn: 'root'
})
export class BlogUserService {

  private apiServerUrl=environment.apiServerUrl;

  constructor(private httpClient: HttpClient) { }

  public getBlogUsers(): Observable<BlogUser[]>{
    return this.httpClient.get<BlogUser[]>(`${this.apiServerUrl}/blog/getAll`);
  }
  public addBlogUser(blogUser: BlogUser): Observable<BlogUser>{
    return this.httpClient.post<BlogUser>(`${this.apiServerUrl}/blog/add)`,blogUser);
}
public updateBlogUser(blogUser: BlogUser): Observable<BlogUser>{
    return this.httpClient.put<BlogUser>(`${this.apiServerUrl}/blog/update)`,blogUser);
}
public deleteBlogUser(id: number): Observable<void>{
    return this.httpClient.delete<void>(`${this.apiServerUrl}/blog/delete/${id})`);
}
}
