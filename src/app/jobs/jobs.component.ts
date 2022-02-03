import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UpdateJobComponent } from '../update-job/update-job.component';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  @Input() jobs: any;
  isOpen: number | null = 0;
  displayedColumns: string[] = [
    'lastUpdate',
    'position',
    'company',
    'status',
    'jobLink',
    'update',
  ];

  constructor(private router: Router, private matDialog: MatDialog) {}

  toggleTab(isOpen: number | null) {
    this.isOpen = isOpen;
  }

  filterJobs() {
    return this.jobs.filter((job: any) => job.open === (this.isOpen === 0));
  }

  onOpen(jobId: string) {
    this.matDialog.open(UpdateJobComponent, { data: jobId });
  }

  ngOnInit(): void {}
}
