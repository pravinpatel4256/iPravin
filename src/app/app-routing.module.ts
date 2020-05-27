import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ResumeComponent} from './components/resume/resume.component';
import {AboutComponent} from './components/about/about.component';
import {WorkComponent} from './components/work/work.component';
import {ExperienceComponent} from './components/experience/experience.component';
import {ContactComponent} from './components/contact/contact.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'work', component: WorkComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
