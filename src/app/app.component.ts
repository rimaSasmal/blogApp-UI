import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BlogUserService } from './blog-user.service';
import { BlogUser } from './bloguser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'blogapp';
  public blogUsers: BlogUser[] = [];
  constructor(private blogUserService:BlogUserService){}
  ngOnInit(): void {
   this.getBlogUsers();
  }

  public getBlogUsers():void{
    this.blogUserService.getBlogUsers().subscribe(
      (response : BlogUser[])=>{
        this.blogUsers =response;
      },
      (error : HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }
  public onOpenModal(mode: string):void{
    const button =  document.createElement('button');
    const conatiner = document.getElementById('main-container');
    button.type = 'button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode==='add'){
      button.setAttribute('data-target','#addBlogUserModal');
    }
    else if(mode==='edit'){
      button.setAttribute('data-target','#updateBlogUserModal');
    }
    else if(mode==='delete'){
      button.setAttribute('data-target','#deleteBlogUserModal');
    }
    conatiner?.appendChild(button);
    button.click();
  }

}
