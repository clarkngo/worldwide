import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchByNamePipe } from './search-by-name-pipe'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  declarations: [ AppComponent, SearchByNamePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
