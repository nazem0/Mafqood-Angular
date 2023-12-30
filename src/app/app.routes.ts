import { Routes } from '@angular/router';
import { ReportComponent } from './components/report/report.component';

export const routes: Routes = [
    { path: "report/:id", component: ReportComponent }
];
