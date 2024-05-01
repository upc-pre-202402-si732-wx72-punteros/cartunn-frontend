import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { SidebarComponent } from './public/components/sidebar/sidebar.component';
import { HomeComponent } from './public/pages/home/home.component';
import { HelpCenterComponent } from './public/pages/help-center/help-center.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { ProductComponent } from './public/pages/product/product.component';
import { SearcherComponent } from './public/pages/searcher/searcher.component';
import { SettingsComponent } from './public/pages/settings/settings.component';
import { ShoppingCartComponent } from './public/pages/shopping-cart/shopping-cart.component';
import { ReportsPanelComponent } from './public/pages/reports-panel/reports-panel.component';
import { NotificationsPanelComponent } from './public/pages/notifications-panel/notifications-panel.component';
import { NotificationsCardComponent } from './notifications/components/card/card.component';
import { ReportCardComponent } from "./reports/components/card/card.component";
import { ProductsCardComponent } from './products/components/card/card.component';
import { LoginComponent } from './public/pages/login/login.component';
import { SignUpComponent } from './public/pages/sign-up/sign-up.component';
import { ResetPasswordComponent } from './public/pages/reset-password/reset-password.component';
import { LoginFormComponent } from './public/components/login-form/login-form.component';
import { ResetPasswordFormComponent } from './public/components/reset-password-form/reset-password-form.component';
import { SignUpFormComponent } from './public/components/sign-up-form/sign-up-form.component';

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

import { CardSettingsComponent } from './settings/components/card-settings/card-settings.component';
import { FormSettingsComponent } from './settings/components/form-settings/form-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
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
    FormSettingsComponent
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
