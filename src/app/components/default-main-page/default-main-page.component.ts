import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-main-page',
  templateUrl: './default-main-page.component.html',
  styleUrls: ['./default-main-page.component.scss']
})
export class DefaultMainPageComponent implements OnInit {
  selectedDate= new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
