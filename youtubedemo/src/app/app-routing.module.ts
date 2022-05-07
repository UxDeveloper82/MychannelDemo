import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberlistComponent } from './adminpanel/memberlist/memberlist.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { ProjectsComponent } from './projects/projects.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
     path: '',
     runGuardsAndResolvers: 'always',
     canActivate: [AuthGuard],
     children: [
      { path: 'members', component: MemberListComponent},
      { path: 'projects', component: ProjectsComponent},
      { path: 'contact', component: ContactComponent},
      { path: 'memberlist', component: MemberlistComponent},
     ]
  },
  { path: '**', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
