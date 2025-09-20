import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Posts } from './components/posts/posts';
import { PostForm } from './components/post-form/post-form';

const routes: Routes = [
  {
    path: '', component: Posts
  },
  {
    path: 'add', component: PostForm
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
