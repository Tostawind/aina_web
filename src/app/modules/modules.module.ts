import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ServiciosComponent } from './servicios/servicios.component';



@NgModule({
  declarations: [
    HomeComponent,
    SobreMiComponent,
    ServiciosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class ModulesModule { }
