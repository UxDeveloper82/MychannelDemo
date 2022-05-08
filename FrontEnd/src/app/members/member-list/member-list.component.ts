import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
   members: Member[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Member[]>('data/UserSeedData.json').subscribe(members =>{
      this.members = members;
      console.log(members);
    })
  }

}
