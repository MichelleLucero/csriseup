import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../user.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.css'],
})
export class UpdateJobComponent implements OnInit {
  oldJobData: any = {};
  jobData: any = {};
  open: string = 'open';
  constructor(
    @Inject(MAT_DIALOG_DATA) public jobId: string,
    private matDialogRef: MatDialogRef<UpdateJobComponent>,
    private userService: UserService
  ) {
    this.getJob();
  }

  ngOnInit(): void {}

  getJob() {
    this.userService.getJob(this.jobId).subscribe(
      (res) => {
        this.oldJobData = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  updateJob() {
    this.jobData.open = this.open === 'open';
    console.log(this.jobData);
    this.userService.updateJob(this.jobId, this.jobData).subscribe(
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
