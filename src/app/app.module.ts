import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { appRoutingProviders, routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CuboService } from './services/cubo.service';
import { MarcaComponent } from './components/marca/marca.component';
import { CuboComponent } from './components/shared/cubo/cubo.component';
import { DetallesCuboComponent } from './components/detalles-cubo/detalles-cubo.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { UsuarioService } from './services/usuario.service';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprasComponent } from './components/compras/compras.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    MarcaComponent,
    CuboComponent,
    DetallesCuboComponent,
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
    ComprasComponent,
    TiendaComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    appRoutingProviders,
    CuboService,
    UsuarioService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
