import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from '../_services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  model: any = {};
  sendMessageForm: NgForm;

  constructor(private contactService: ContactService,
              private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {

  }

  

  sendMessage() {
    this.contactService.sendMessage(this.model).subscribe(
      () => {
        this.router.navigateByUrl('/');
        this.toastr.success('Message send');
      }, err => {
        console.log(err);
      })
  }

}
