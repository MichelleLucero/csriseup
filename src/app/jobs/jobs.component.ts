import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  @Input() jobs: any;
  isOpen: boolean = true;

  constructor(private router: Router) {}

  toggleTab(isOpen: boolean) {
    this.isOpen = isOpen;
  }

  filterJobs() {
    return this.jobs.filter((job: any) => job.open === this.isOpen);
  }

  ngOnInit(): void {}
}
