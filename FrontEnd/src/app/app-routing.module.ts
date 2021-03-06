import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactlistComponent } from './adminpanel/contactlist/contactlist.component';
import { MemberlistComponent } from './adminpanel/memberlist/memberlist.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ProjectsComponent } from './projects/projects.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailedResolver } from './_resolvers/member-detailed.resolver';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
     path: '',
     runGuardsAndResolvers: 'always',
     canActivate: [AuthGuard],
     children: [
      { path: 'members', component: MemberListComponent},
      { path: 'members/:username', component: MemberDetailComponent, resolve: {member: MemberDetailedResolver}},
      { path: 'member/edit', component: MemberEditComponent},
      {path: 'lists', component: ListsComponent},
      { path: 'projects', component: ProjectsComponent},
      { path: 'contact', component: ContactComponent},
      { path: 'memberlist', component: MemberlistComponent},
      { path: 'contactlist', component: ContactlistComponent},
     ]
  },
  { path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
