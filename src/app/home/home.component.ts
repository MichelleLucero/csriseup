import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { MatDialog } from '@angular/material/dialog';
import { AddJobComponent } from '../add-job/add-job.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  jobs: any[] = [];

  constructor(private userService: UserService, private matDialog: MatDialog) {
    this.userService.getAllJobs().subscribe((job) => {
      console.log(job);
      this.jobs = job;
      console.log(this.jobs);
    });
  }

  onOpen() {
    this.matDialog.open(AddJobComponent);
  }

  ngOnInit(): void {}
}
