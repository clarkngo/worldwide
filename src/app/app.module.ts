import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchByNamePipe } from './search-by-name-pipe';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './footer/footer.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    MaterialModule,
  ],
  declarations: [ AppComponent, SearchByNamePipe, FooterComponent, TopBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
