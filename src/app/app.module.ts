import { MessagingModule } from './messaging/messaging.module';
import { TodosModule } from './tasking/todos.module';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    TodosModule,
    MessagingModule
  ],
  providers: [DevToolsExtension],
  bootstrap: [AppComponent]
})
export class AppModule {
  // tslint:disable-next-line: no-shadowed-variable
  constructor(
    ngRedux: NgRedux<IAppState>,
    devTools: DevToolsExtension) {

    const enhancers = isDevMode() ? [devTools.enhancer()] : [];
    // ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
 }
