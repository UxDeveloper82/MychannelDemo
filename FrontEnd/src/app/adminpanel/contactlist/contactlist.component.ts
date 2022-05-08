import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/_models/contact';
import { ContactService } from 'src/app/_services/contact.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css'],
})
export class ContactlistComponent implements OnInit {
  contacts: Contact[] = [];
  name: any;
  p: number = 1;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getMessages().subscribe((res) => {
      this.contacts = res;
    });
  }

  Search() {
    if (this.name == '') {
      this.ngOnInit();
    } else {
      this.contacts = this.contacts.filter((res) => {
        return res.name
          .toLocaleLowerCase()
          .match(this.name.toLocaleLowerCase());
      });
    }
  }
   key : string = 'id';
   reverse: boolean = false;
   sort(key: any) {
     this.key = key;
     this.reverse = !this.reverse;
   }
}
