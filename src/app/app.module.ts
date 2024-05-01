import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SidebarComponent } from './public/components/sidebar/sidebar.component';

import {MatListModule, MatNavList} from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './public/pages/home/home.component';
import { HelpCenterComponent } from './public/pages/help-center/help-center.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { ProductComponent } from './public/pages/product/product.component';
import { SearcherComponent } from './public/pages/searcher/searcher.component';
import { SettingsComponent } from './public/pages/settings/settings.component';
import { ShoppingCartComponent } from './public/pages/shopping-cart/shopping-cart.component';
import { ReportsPanelComponent } from './public/pages/reports-panel/reports-panel.component';

import { MatExpansionPanel} from "@angular/material/expansion";
import { MatExpansionPanelHeader} from "@angular/material/expansion";
import { MatExpansionPanelTitle} from "@angular/material/expansion";
import { MatExpansionPanelDescription} from "@angular/material/expansion";

import { NotificationsPanelComponent } from './public/pages/notifications-panel/notifications-panel.component';
import {MatCard, MatCardModule} from "@angular/material/card";
import { MatCardContent } from "@angular/material/card";
import { MatCardTitle } from "@angular/material/card";
import { HttpClientModule } from '@angular/common/http';
import { NotificationsCardComponent } from './notifications/components/card/card.component';
import { ReportCardComponent } from "./reports/components/card/card.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatCheckbox} from "@angular/material/checkbox";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatHint, MatInputModule, MatLabel} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {NgOptimizedImage} from "@angular/common";
import {MatNativeDateModule} from "@angular/material/core";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatMenuModule} from "@angular/material/menu";
import { ProductsCardComponent } from './products/components/card/card.component';

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
    NotificationsPanelComponent,
    NotificationsCardComponent,
    ReportCardComponent,
    ReportsPanelComponent,
    ProductsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelHeader,
    MatExpansionPanelDescription,
    MatCardContent,
    MatCard,
    MatCardTitle,
    HttpClientModule,
    BrowserAnimationsModule,
    MatNavList,
    MatButtonToggleModule,
    MatCheckbox,
    MatDatepicker,
    MatDatepickerToggle,
    MatDatepickerInput,
    MatInputModule,
    MatFormFieldModule,
    NgOptimizedImage,
    MatDatepickerModule,
    MatNativeDateModule,
    MatHint,
    MatLabel,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
],
  providers: [
    provideAnimationsAsync(),
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
