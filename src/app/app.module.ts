import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LinkstagComponent } from './linkstag/linkstag.component';
import { ImageComponent } from '../image/image.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ],
  declarations: [ AppComponent, HelloComponent,LinkstagComponent ,ImageComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
