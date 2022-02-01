import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  @Input() jobs: any;
  tab: any = 'tab1';

  constructor(private router: Router) {}

  toggleTab(check: number) {
    console.log(check);
    if (check === 1) {
      this.tab = 'tab1';
    } else {
      this.tab = 'tab2';
    }
    console.log(this.tab);
  }

  ngOnInit(): void {}
}
