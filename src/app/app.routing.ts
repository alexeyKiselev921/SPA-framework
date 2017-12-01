import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';

export const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'country-list/:count', component: CountryListComponent },
    { path: 'country-maint', component: CountryMaintComponent },
    { path: 'country-detail/:country', component: CountryDetailComponent },
    { path: '', component: DashboardComponent },
    { path: '**', component: DashboardComponent}
];
