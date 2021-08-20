import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { DanceFloorComponent } from './dance-floor/dance-floor.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: '**', component: WelcomeComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, WelcomeComponent, AboutComponent, DanceFloorComponent, ChatWindowComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
