import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user';
import { Router, RouterModule } from '@angular/router';
import { Trainee } from '../../interfaces/trainee';

@Component({
  selector: 'app-user-list',
  imports: [RouterModule],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.scss'],
  providers: [UserService]
})
export class UserList implements OnInit {
  private service = inject(UserService);
  private router = inject(Router);

  totalTrainees = 0;
  totalPages = 0;
  currentPage = 1;
  pageSize = 10;
  pages: number[] = [];

  trainees: Trainee[] = [];

  ngOnInit(): void {
    this.loadTrainees();
  }

  loadTrainees(pageNumber: number = 1) {
  this.service.getUsers(pageNumber, this.pageSize).subscribe(res => {
    console.log(res);
    this.trainees = res.trainees;
    this.totalTrainees = res.totalCount; 
    this.currentPage = pageNumber;
    this.totalPages = Math.ceil(this.totalTrainees / this.pageSize);
    console.log(this.totalPages);
    // generate pages array
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  });
}


  goToPage(pageNumber: number) {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.loadTrainees(pageNumber);
    }
  }
}
