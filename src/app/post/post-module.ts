import { assertNotInReactiveContext, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostService } from './services/post-service';
import { PostForm } from './components/post-form/post-form';
import { Posts } from './components/posts/posts';
import { UniversityService } from './services/university-service';
import { TrainningPeriodServices } from './services/trainning-period-services';


@NgModule({
  declarations: [PostForm, Posts],
  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PostService, UniversityService, TrainningPeriodServices]
})
export class PostModule { }
