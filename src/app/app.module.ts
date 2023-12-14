import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { ShabloniComponent } from './components/shabloni/shabloni.component';
import { InterpolyaciyaComponent } from './components/interpolyaciya/interpolyaciya.component';
import { BindingsComponent } from './components/bindings/bindings.component';
import { EventBindingsComponent } from './components/event-bindings/event-bindings.component';
import { TwoWayBindingsComponent } from './components/two-way-bindings/two-way-bindings.component';
import { DirectiveStyleComponent } from './components/directive-style/directive-style.component';
import { DirectiveClassComponent } from './components/directive-class/directive-class.component';
import { DirectiveIfElseComponent } from './components/directive-if-else/directive-if-else.component';
import { DirectiveNgforComponent } from './components/directive-ngfor/directive-ngfor.component';
import { PipesComponent } from './components/pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ShabloniComponent,
    InterpolyaciyaComponent,
    BindingsComponent,
    EventBindingsComponent,
    TwoWayBindingsComponent,
    DirectiveStyleComponent,
    DirectiveClassComponent,
    DirectiveIfElseComponent,
    DirectiveNgforComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
