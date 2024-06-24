import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from "../../../iam/services/authentication.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  isSearcherExpanded = false;
  isLogoExpanded = true;
  areIconsExpanded = true;
  searchValue: string = '';
  isSignedIn: boolean = false;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.authenticationService
      .isSignedIn
      .subscribe(
        isSignedIn => this.isSignedIn = isSignedIn
      );
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  onSearchInput(event: any) {
    this.searchValue = event.target.value;
    console.log('Search value:', this.searchValue);
  }

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);


  isClientRoute(): boolean {
    return this.router.url.includes('/client');
  }

  isStaffRoute(): boolean {
    return this.router.url.includes('/staff');
  }

  isAuthRoute(): boolean {
    const authRoutes = ['/login', '/sign-up', '/reset-password'];
    return authRoutes.includes(this.router.url);
  }

  onSignOut() {
    this.authenticationService.signOut();
  }
}
