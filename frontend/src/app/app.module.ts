import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatNativeDateModule } from '@angular/material'

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignupComponent } from './signup/signup.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { DashboardEleccionesComponent } from './admin-elecciones/dashboard-elecciones/dashboard-elecciones.component';
import { EleccionCardComponent } from './admin-elecciones/eleccion-card/eleccion-card.component';
import { EleccionesGridComponent } from './admin-elecciones/elecciones-grid/elecciones-grid.component';
import {MatListModule} from '@angular/material/list';

import { DatabaseService } from './services/database.service';
import { AdminDbComponent } from './admin-db/admin-db.component';
import { AdminDashboardComponent } from './admin-home/admin-dashboard/admin-dashboard.component';
import { AdminCardComponent } from './admin-home/admin-card/admin-card.component';
import { AdminGridComponent } from './admin-home/admin-grid/admin-grid.component';
import { NavBarAdminComponent } from './nav-bar-admin/nav-bar-admin.component';
import { NavBarAsesorComponent } from './nav-bar-asesor/nav-bar-asesor.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BloqueDialogComponent } from './bloque-dialog/bloque-dialog.component';
import { EleccionDialogComponent } from './eleccion-dialog/eleccion-dialog.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'admin/admin-elecciones', component: DashboardEleccionesComponent },
  { path: 'admin/admin-db', component : AdminDbComponent},
  { path: 'admin/home', component: AdminDashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    SignupComponent,
    AdminHomeComponent,
    UserHomeComponent,
    EleccionCardComponent,
    EleccionesGridComponent,
    DashboardEleccionesComponent,
    AdminDbComponent,
    AdminDashboardComponent,
    AdminCardComponent,
    AdminGridComponent,
    NavBarAdminComponent,
    NavBarAsesorComponent,
    BloqueDialogComponent,
    EleccionDialogComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatTableModule
  ],
  entryComponents: [BloqueDialogComponent,EleccionDialogComponent],

  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
