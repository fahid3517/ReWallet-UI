import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AddStoreComponent } from './add-store/add-store.component';
import { ManageStoreComponent } from './manage-store/manage-store.component';


@NgModule({
  declarations: [
    StoreComponent,AddStoreComponent,ManageStoreComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
