import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { RestService } from 'src/app/_services/rest.service';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css']
})
export class MemberlistComponent implements OnInit {
  users: User[] = [];
  firstName: any;
  p: number = 1;

  constructor(private restService: RestService ) { }

  ngOnInit(): void {
    this.restService.getData().subscribe((res) => {
      this.users = res;
    })
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
