import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'domaine', loadChildren: './pages/domaine/domaine.module#DomainePageModule' },
  { path: 'expert', loadChildren: './pages/expert/expert.module#ExpertPageModule' },
  { path: 'sign', loadChildren: './pages/sign/sign.module#SignPageModule' },
  { path: 'help', loadChildren: './pages/help/help.module#HelpPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
