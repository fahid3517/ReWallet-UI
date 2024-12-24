// src/app/shared/material.module.ts
import { NgModule } from '@angular/core';import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
;

@NgModule({
  exports: [
    MatButtonModule,
    MatInputModule,
  ],
  declarations: [
    HeaderComponent,
    SideMenuComponent
  ],
})
export class MaterialModule {}
