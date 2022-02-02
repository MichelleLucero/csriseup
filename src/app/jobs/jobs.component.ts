import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  @Input() jobs: any;
  filteredJobs: any;
  tab: any = 'tab1';

  constructor(private router: Router) {}

  toggleTab(check: boolean) {
    if (check === true) {
      this.tab = 'tab1';
    } else {
      this.tab = 'tab2';
    }
  }

  filterJobs() {
    console.log(this.tab === 'tab1');
    return this.jobs.filter((job: any) => job.open === (this.tab === 'tab1'));
  }

  ngOnInit(): void {}
}
