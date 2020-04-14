import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, children:[
      { path: ':id/:name', component: UserComponent }
    ] },
    //is only accesible if authguard return true
    { path: 'servers',
    //canActivate:[AuthGuard], 
    canActivateChild:[AuthGuard],
    component: ServersComponent, children:[
      { path: ':id', component: ServerComponent , resolve: {server:ServerResolver}},
      { path: ':id/edit', component: EditServerComponent, canDeactivate:[CanDeactivateGuard] }
    ]},
    // { path: 'not-found', component: PageNotFoundComponent },
    { path: 'not-found', component: ErrorPageComponent, data: {message:'Page not found!!!!!!!!!!!!!!!!!'} },
    { path: '**', redirectTo: '/not-found' } // always at the end
  ];

  @NgModule({
      imports:[
        // al momento de subirlo a un servidor no encuentra los /server, /users se usa el hash para agregar un # al URL y obviar todo lo anterior
        //  RouterModule.forRoot(appRoutes, {useHash:true}),
          RouterModule.forRoot(appRoutes)
      ],
      exports: [RouterModule]
  })

  export class AppRoutingModule{

  }