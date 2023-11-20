import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ModuleWithProviders } from '@angular/core';
import { MarcaComponent } from "./components/marca/marca.component";
import { DetallesCuboComponent } from "./components/detalles-cubo/detalles-cubo.component";
import { LoginComponent } from "./components/login/login.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { PerfilComponent } from "./components/perfil/perfil.component";
import { ComprasComponent } from "./components/compras/compras.component";
import { TiendaComponent } from "./components/tienda/tienda.component";

var rutas: Routes = [
    { path: "", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "registro", component: RegistroComponent },
    { path: "logout", component: LogoutComponent },
    { path: "perfil", component: PerfilComponent },
    { path: "compras", component: ComprasComponent },
    { path: "tienda", component: TiendaComponent },
    { path: "marca/:marca", component: MarcaComponent },
    { path: "detallescubo/:idcubo", component: DetallesCuboComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(rutas);