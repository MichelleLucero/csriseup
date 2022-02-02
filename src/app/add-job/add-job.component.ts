import { Component, OnInit } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css'],
})
export class AddJobComponent implements OnInit {
  formModal: any;
  constructor() {}

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );
  }

  // open modal
  openModal() {
    this.formModal.show();
  }

  // close modal
  doSomething() {
    this.formModal.hide();
  }
}
