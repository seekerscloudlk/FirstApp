import {Component, OnInit} from '@angular/core';
import RoomDTO from '../../../../dto/RoomDTO';
import * as CryptoJS from 'crypto-js';

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

  filesToUpload: Array<File> = [];
  urls = new Array<string>();
  txtRoomName = '';
  txtRoomType = '';
  txtRoomSleeps = 0;
  txtRoomCost = 0;
  txtRoomCount = 0;
  txtRoomSize = 0;
  txtPetAllowed = false;
  txtDescription='';

  ngOnInit(): void {
  }

  addToList() {
    this.selectedFacilitiesError = false;
    if (this.selectedFacilities.trim().length > 0) {
      if (!this.isExists(this.selectedFacilities.trim())) {
        this.facilitiesList.push(this.selectedFacilities.trim());
        this.selectedFacilities = '';
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

  changeFiles(event) {

    this.filesToUpload = event.target.files as Array<File>;
    this.urls = [];
    const files = event.target.files;
    if (files) {
      for (const file of files) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png') {
            if (Number(e.total) > 2e+6) {
              alert('Please make sure that you entered image size is less than 2MB');
              this.filesToUpload = [];
              return;
            } else {
              this.urls.push(e.target.result);
            }
          } else {
            alert('Supported formats: .JPEG .JPG .PNG');
            this.filesToUpload = [];
            return;
          }


        };
        reader.readAsDataURL(file);
      }
    }

  }

  uploadRoomData() {

    let sampleId = '';
    try{
      sampleId = CryptoJS.AES.encrypt(Math.random(), 'secret key 123').toString();
    }catch (e) {
      console.log(e);
    }
    console.log(sampleId);
    const dto = new RoomDTO(
      sampleId,
      this.txtRoomName.trim(),
      this.txtRoomType.trim(),
      this.txtRoomSleeps,
      this.txtRoomCost,
      this.txtRoomCount,
      this.txtRoomSize,
      this.txtDescription,
      this.txtPetAllowed,
      [],
      this.facilitiesList,
      false,
      []
    );
    console.log(dto);
  }
}




