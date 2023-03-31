import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {UserAuthModule} from './user-auth/user-auth.module';
import { IfElseComponent } from './if-else/if-else.component';
import { SwitchComponent } from './switch/switch.component';
import { CounterComponent } from './counter/counter.component';
import { BtnandInputsComponent } from './btnand-inputs/btnand-inputs.component';
import { LoopsComponent } from './loops/loops.component';
import { NestedloopsComponent } from './nestedloops/nestedloops.component';
import { DynamicStyleComponent } from './dynamic-style/dynamic-style.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component'
import {FormsModule} from '@angular/forms';
import { ToggleComponent } from './toggle/toggle.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IfElseComponent,
    SwitchComponent,
    CounterComponent,
    BtnandInputsComponent,
    LoopsComponent,
    NestedloopsComponent,
    DynamicStyleComponent,
    HeaderComponent,
    FormComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
