import { IAppState, rootReducer } from './store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgReduxModule, NgRedux } from '@angular-redux/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // tslint:disable-next-line: no-shadowed-variable
  constructor(ngRedux: NgRedux<IAppState> ) {
    ngRedux.configureStore(rootReducer, {});
  }
 }
