import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from "./intro/intro.component";
import { AppComponent } from './app.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';

export const routes: Routes = [
    { path: '', component: IntroComponent },
    { path: 'getting-started', component: GettingStartedComponent },
    { path: 'tutorials/writing-a-json-scene', component: AppComponent }
];

export const appRoutingModule = RouterModule.forRoot(routes);
