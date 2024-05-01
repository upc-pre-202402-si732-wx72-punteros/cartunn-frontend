import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelpCenterComponent } from "./public/pages/help-center/help-center.component";
import { HomeComponent } from "./public/pages/home/home.component";
import { PageNotFoundComponent } from "./public/pages/page-not-found/page-not-found.component";
import { ProductComponent } from "./public/pages/product/product.component";
import { SearcherComponent } from "./public/pages/searcher/searcher.component";
import { SettingsComponent } from "./public/pages/settings/settings.component";
import { ShoppingCartComponent} from "./public/pages/shopping-cart/shopping-cart.component";
import { ReportsPanelComponent} from "./public/pages/reports-panel/reports-panel.component";
import { NotificationsPanelComponent} from "./public/pages/notifications-panel/notifications-panel.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
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
