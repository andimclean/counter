import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CountService } from './count.service';
import { ClickableBoxComponent } from './clickable-box/clickable-box.component';
import { CountDisplayerComponent } from './count-displayer/count-displayer.component';


@NgModule({
  declarations: [
    AppComponent,
    ClickableBoxComponent,
    CountDisplayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
