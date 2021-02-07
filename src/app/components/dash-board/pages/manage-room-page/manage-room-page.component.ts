import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-manage-room-page',
  templateUrl: './manage-room-page.component.html',
  styleUrls: ['./manage-room-page.component.scss']
})
export class ManageRoomPageComponent implements OnInit {

  constructor() {
  }

  roomTypeArray: string[] = [
    'Single',
    'Double',
    'Triple',
    'Quad',
    'Queen',
    'King',
    'Twin',
  ];

  selectedFacilities = '';
  selectedFacilitiesError = false;


  facilitiesList: string[] = [];

  ngOnInit(): void {
  }

  addToList() {
    this.selectedFacilitiesError = false;
    if (this.selectedFacilities.trim().length > 0) {
      if (!this.isExists(this.selectedFacilities.trim())) {
        this.facilitiesList.push(this.selectedFacilities.trim());
        this.selectedFacilities='';
      }else{
        alert('This record is already exists!');
        this.selectedFacilities = '';
        return;
      }
    } else {
      alert('this value is required!');
      this.selectedFacilitiesError = true;
    }
  }

  isExists(data: string): boolean {
    for (const temp of this.facilitiesList) {
      if (temp === data) {
        return true;
      }
    }
    return false;
  }

  removeFromList(num: number) {

    if (confirm('Are You sure ?')){
      this.facilitiesList.splice(num, 1);
    }else{

    }


  }

  filesToUpload:Array<File>=[];
  urls= new Array<string>();

  changeFiles(event) {

    this.filesToUpload=event.target.files as Array<File>;

  }
}
