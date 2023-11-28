import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { ShabloniComponent } from './components/shabloni/shabloni.component';
import { InterpolyaciyaComponent } from './components/interpolyaciya/interpolyaciya.component';
import { BindingsComponent } from './components/bindings/bindings.component';
import { EventBindingsComponent } from './components/event-bindings/event-bindings.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ShabloniComponent,
    InterpolyaciyaComponent,
    BindingsComponent,
    EventBindingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
