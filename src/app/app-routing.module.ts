import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelpCenterComponent } from "./public/pages/help-center/help-center.component";
import { HomeContentComponent} from "./public/pages/home-content/home-content.component";
import { PageNotFoundComponent } from "./public/pages/page-not-found/page-not-found.component";
import { ProductComponent } from "./public/pages/product/product.component";
import { SearcherComponent } from "./public/pages/searcher/searcher.component";
import { SettingsComponent } from "./public/pages/settings/settings.component";
import { ShoppingCartComponent } from "./public/pages/shopping-cart/shopping-cart.component";
import { ReportsPanelComponent } from "./public/pages/reports-panel/reports-panel.component";
import { NotificationsPanelComponent } from "./public/pages/notifications-panel/notifications-panel.component";
import { LoginComponent } from "./public/pages/login/login.component";
import { SignUpComponent } from "./public/pages/sign-up/sign-up.component";
import { ResetPasswordComponent} from "./public/pages/reset-password/reset-password.component";
import { FavoritesPanelComponent} from "./public/pages/favorites-panel/favorites-panel.component";

const routes: Routes = [
  { path: 'home', component: HomeContentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'favorites', component: FavoritesPanelComponent },
  { path: 'help-center', component: HelpCenterComponent },
  { path: 'product', component: ProductComponent },
  { path: 'searcher', component: SearcherComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'reports', component: ReportsPanelComponent },
  { path: 'notifications', component: NotificationsPanelComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
