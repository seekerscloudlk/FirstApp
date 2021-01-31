import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-room-page',
  templateUrl: './manage-room-page.component.html',
  styleUrls: ['./manage-room-page.component.scss']
})
export class ManageRoomPageComponent implements OnInit {

  constructor() { }

  roomTypeArray: string[] = [
      'Single',
      'Double',
      'Triple',
      'Quad',
      'Queen',
      'King',
      'Twin',
  ];

  ngOnInit(): void {
  }

}
