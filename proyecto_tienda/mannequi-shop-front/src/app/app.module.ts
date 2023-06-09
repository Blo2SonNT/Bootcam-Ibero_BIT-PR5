import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductosGrillaComponent } from './components/productos-grilla/productos-grilla.component';
import { ErrorPagina404Component } from './components/error-pagina404/error-pagina404.component';
import { GestionProductosFormularioComponent } from './components/admin/gestion-productos-formulario/gestion-productos-formulario.component';
import { GestionProductosVistaComponent } from './components/admin/gestion-productos-vista/gestion-productos-vista.component';

@NgModule({
    declarations: [
        AppComponent,
        InicioComponent,
        NavbarComponent,
        SidebarComponent,
        ProductosGrillaComponent,
        ErrorPagina404Component,
        GestionProductosFormularioComponent,
        GestionProductosVistaComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
