import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService, private toastr: ToastrService,
              private router: Router) {}

  ngOnInit(): void {

  }
  login() {
    this.accountService.login(this.model).subscribe(response => {
        this.router.navigateByUrl('/members');
        this.toastr.success("Welcome Back");
      },(error) => {
        console.log(error);
        this.toastr.error(error.error);
      });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/')
    this.toastr.success("Good Bye!...Return Soon!");
  }
}
