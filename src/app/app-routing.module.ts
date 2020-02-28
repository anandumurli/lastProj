import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { UserInteractionComponent } from './components/user-interaction/user-interaction.component';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'user',
    component: UserInteractionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
