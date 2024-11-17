import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from "./intro/intro.component";

export const routes: Routes = [
    { path: 'intro', component: IntroComponent }
];

export const appRoutingModule = RouterModule.forRoot(routes);
