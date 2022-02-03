import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css'],
})
export class AddJobComponent implements OnInit {
  jobData: any = {};

  constructor(
    private matDialogRef: MatDialogRef<AddJobComponent>,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  createJob() {
    this.userService.createJob(this.jobData).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );

    this.matDialogRef.close();
  }
}
