import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { SidebarComponent } from './public/components/sidebar/sidebar.component';
import { HelpCenterComponent } from './public/pages/help-center/help-center.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { ProductComponent } from './public/pages/product/product.component';
import { SearcherComponent } from './public/pages/searcher/searcher.component';
import { SettingsComponent } from './profile-managment/pages/settings/settings.component';
import { ShoppingCartComponent } from './subscription-and-payments/pages/shopping-cart/shopping-cart.component';
import { ReportsPanelComponent } from './public/pages/reports-panel/reports-panel.component';
import { NotificationsPanelComponent } from './profile-managment/pages/notifications-panel/notifications-panel.component';
import { NotificationsCardComponent } from './profile-managment/components/card/card.component';
import { ReportCardComponent } from "./reports/components/card/card.component";
import { ProductsCardComponent } from './products/components/card/card.component';
import { LoginComponent } from './IAM/pages/login/login.component';
import { SignUpComponent } from './IAM/pages/sign-up/sign-up.component';
import { ResetPasswordComponent } from './IAM/pages/reset-password/reset-password.component';
import { LoginFormComponent } from './IAM/components/login-form/login-form.component';
import { ResetPasswordFormComponent } from './IAM/components/reset-password-form/reset-password-form.component';
import { SignUpFormComponent } from './IAM/components/sign-up-form/sign-up-form.component';

import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCardModule } from "@angular/material/card";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatMenuModule } from "@angular/material/menu";

import { CardSettingsComponent } from './profile-managment/components/card-settings/card-settings.component';
import { FormSettingsComponent } from './profile-managment/components/form-settings/form-settings.component';
import { HomeContentComponent } from './dashboard-and-analytics/pages/home-content/home-content.component';
import { ProductsComponent } from './products/components/products/products.component';

import { FavoritesCardComponent } from './dashboard-and-analytics/components/card/card.component';
import { FavoritesPanelComponent } from './profile-managment/pages/favorites-panel/favorites-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HelpCenterComponent,
    PageNotFoundComponent,
    ProductComponent,
    SearcherComponent,
    SettingsComponent,
    ShoppingCartComponent,
    ReportsPanelComponent,
    NotificationsPanelComponent,
    NotificationsCardComponent,
    ReportCardComponent,
    ProductsCardComponent,
    LoginComponent,
    SignUpComponent,
    ResetPasswordComponent,
    LoginFormComponent,
    ResetPasswordFormComponent,
    SignUpFormComponent,
    CardSettingsComponent,
    FormSettingsComponent,
    HomeContentComponent,
    ProductsComponent,
    FavoritesCardComponent,
    FavoritesPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
