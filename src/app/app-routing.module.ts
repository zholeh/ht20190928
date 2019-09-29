import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ht1Component } from './ht1/ht1.component';

const routes: Routes = [{ path: 'ht1', component: Ht1Component }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
