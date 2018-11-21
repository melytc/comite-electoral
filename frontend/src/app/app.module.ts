import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { MatNativeDateModule, MatCheckboxModule, MatStepperModule } from '@angular/material'
import { ChartModule } from 'angular-highcharts';


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
import {MatTabsModule} from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignupComponent } from './signup/signup.component';
import { AdminHomeComponent } from './admin/home/admin-home/admin-home.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { DashboardEleccionesComponent } from './admin/admin-elecciones/dashboard-elecciones/dashboard-elecciones.component';
import { EleccionCardComponent } from './admin/admin-elecciones/eleccion-card/eleccion-card.component';
import { EleccionesGridComponent } from './admin/admin-elecciones/elecciones-grid/elecciones-grid.component';
import { MatListModule } from '@angular/material/list';

import { DatabaseService } from './services/database.service';
import { AdminDbComponent } from './admin/admin-db/admin-db.component';
import { AdminDashboardComponent } from './admin/home/admin-home/admin-dashboard/admin-dashboard.component';
import { AdminCardComponent } from './admin/home/admin-home/admin-card/admin-card.component';
import { AdminGridComponent } from './admin/home/admin-home/admin-grid/admin-grid.component';
import { NavBarAdminComponent } from './admin/nav-bar-admin/nav-bar-admin.component';
import { NavBarAsesorComponent } from './asesor/nav-bar-asesor/nav-bar-asesor.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BloqueDialogComponent } from './admin/home/bloque-dialog/bloque-dialog.component';
import { EleccionDialogComponent } from './admin/home/eleccion-dialog/eleccion-dialog.component';
import { AdminRolesComponent } from './admin/admin-roles/admin-roles.component';
import { AdminRegistrosComponent } from './admin/admin-registros/admin-registros.component';
import { UsersComponent } from './admin/users/users.component';
import { AddRoleDialogComponent } from './admin/users/add-role-dialog/add-role-dialog.component';
import { AsesorDashboardComponent } from './asesor/asesor-dashboard/asesor-dashboard.component';
import { AdminResultadosComponent } from './admin/admin-resultados/admin-resultados.component';
import { CandidatosRegistroComponent } from './candidatos/candidatos-registro/candidatos-registro.component';
import { AdminBloquesRegistroComponent } from './admin/admin-bloques-registro/admin-bloques-registro.component';
import { CandidatosListaComponent } from './candidatos/candidatos-lista/candidatos-lista.component';
import { CandidatosDetalleComponent } from './candidatos/candidatos-detalle/candidatos-detalle.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'admin/admin-elecciones', component: DashboardEleccionesComponent },
  { path: 'admin/admin-db', component : AdminDbComponent},
  { path: 'admin/home', component: AdminDashboardComponent},
  { path: 'admin/admin-roles', component : AdminRolesComponent},
  { path: 'admin/users', component : UsersComponent },
  { path: 'admin/admin-registros', component : AdminRegistrosComponent},
  { path: 'admin/admin-bloquesRegistro', component: AdminBloquesRegistroComponent},
  { path: 'admin/admin-resultados', component : AdminResultadosComponent},
  { path: 'asesor/dashboard',component : AsesorDashboardComponent},
  { path: 'candidatos/bloques', component : CandidatosRegistroComponent},
  { path: 'admin/candidatos-lista', component : CandidatosListaComponent}
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
    EleccionDialogComponent,
    AdminRolesComponent,
    AdminRegistrosComponent,
    UsersComponent,
    AddRoleDialogComponent,
    AsesorDashboardComponent,
    AdminResultadosComponent,
    CandidatosRegistroComponent,
    AdminBloquesRegistroComponent,
    CandidatosListaComponent,
    CandidatosDetalleComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    MatCheckboxModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    ChartModule
  ],
  entryComponents: [BloqueDialogComponent,EleccionDialogComponent,AddRoleDialogComponent, CandidatosDetalleComponent],

  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
