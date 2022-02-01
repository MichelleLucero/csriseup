import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  jobs: any[] = [];

  constructor(private userService: UserService) {
    this.userService.getAllJobs().subscribe((job) => {
      console.log(job);
      this.jobs = job;
      console.log(this.jobs);
    });
  }

  ngOnInit(): void {}
}
