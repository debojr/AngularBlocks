import { ParallaxComponent } from './parallax/parallax.component';
import { FirstComponent } from './first/first.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { first } from 'rxjs';

const routes: Routes = [

  { path: 'first', component: FirstComponent},
  { path: 'parallax', component: ParallaxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FirstComponent, ParallaxComponent]
