import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { User } from 'src/app/_models/user';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css']
})
export class MemberlistComponent implements OnInit {
  users: User[] = [];
  members: Member[];
  firstName: any;
  p: number = 1;

  constructor(private membersService: MembersService ) { }

  ngOnInit(): void {
    // this.membersService.getMembers().subscribe(res => {
    //   this.members = res;
    // })
  }

  Search() {
    if(this.firstName == '') {
      this.ngOnInit()
    } else {
      this.users = this.users.filter(res => {
        return res.firstName.toLocaleLowerCase()
        .match(this.firstName.toLocaleLowerCase())
      })
    }
  }
  key : string = 'id';
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

}
