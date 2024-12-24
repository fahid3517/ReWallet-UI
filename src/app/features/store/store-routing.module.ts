import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store.component';
import { AddStoreComponent } from './add-store/add-store.component';

const routes: Routes = [
  { path: '', component: StoreComponent },
  { path: 'add-store', component: AddStoreComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
