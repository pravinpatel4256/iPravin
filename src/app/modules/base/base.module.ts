import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [LayoutComponent, LeftNavComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class BaseModule { }
