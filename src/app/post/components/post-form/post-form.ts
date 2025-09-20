import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../services/post-service';
import { PostModel } from '../../models/post-model';
import { Router } from '@angular/router';
import { UniversityModel } from '../../models/university-model';
import { UniversityService } from '../../services/university-service';
import { TrainningPeriodServices } from '../../services/trainning-period-services';
import { TrainningPeriodModel } from '../../models/trainning-period-model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.html',
  styleUrl: './post-form.scss',
  standalone: false
})
export class PostForm {
  postForm!: FormGroup;
  universities: UniversityModel[] = [];
  trainningPeriods: TrainningPeriodModel[] = [];

  constructor(
    private fb: FormBuilder, 
    private postService: PostService,
    private router: Router, 
    private universityService: UniversityService,
    private trainningPeriodService: TrainningPeriodServices
  ){}

  ngOnInit(): void {
    this.postForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      universityId: [null, Validators.required],
      trainningPeriodId: [null, Validators.required],
    })

    //fetch the universities
    this.universityService.getUniversities().subscribe({
      next: (data) => (this.universities = data),
      error: (err) => console.error('Failed to load universities', err)
    });

    //fetch the trainning periods
    this.trainningPeriodService.getTrainningPeriods().subscribe({
      next: (data) => (this.trainningPeriods = data),
      error: (err) => console.error('Failed to load the trainning periods', err)
    });
  }



  onSubmit(): void {
    if(this.postForm.valid) {
      const post: PostModel = this.postForm.value;

      console.log(post);

      this.postService.createPost(post).subscribe( {
        next: (response) => {
          if (response) {
            alert('Successfully saved');

            this.router.navigate(['/users']);
          }
        },
        error: (err) => {
          console.error('Error creating post', err);
        }
      })
    }else {
      console.log('Form is invalid');
    }
  }
}
