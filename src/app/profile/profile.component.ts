import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile:any=[];
repo:any=[];

  constructor(private profileService:ProfileService) {
    this.profileService.getProfileInfo().subscribe(profile=>{
      console.log(profile);
      this.profile = profile;
      
      
    });

    this.profileService.getRepos().subscribe(repo=>{
      console.log(repo);
      this.repo = repo;
      
      
    });
    
   }

  ngOnInit(): void {
  }
  // searchUser() {
  //   this.profileService.updateUser(this.username);
  //   this.profileService.getUser().subscribe(user => {
  //     this.user = user;
  //   });

}
