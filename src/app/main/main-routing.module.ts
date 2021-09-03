import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'user',
        loadChildren: () =>
          import('../modules/user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'role',
        loadChildren: () =>
          import('../modules/role/role.module').then((m) => m.RoleModule),
      },
      {
        path: 'notification',
        loadChildren: () =>
          import('../modules/notification/notification.module').then((m) => m.NotificationModule),
      },
      {
        path: 'emoji-mart',
        loadChildren: () =>
          import('../modules/emoji-mart/emoji-mart.module').then((m) => m.EmojiMartModule),
      },
      {
        path: 'signal-r',
        loadChildren: () =>
          import('../modules/signal-r/signal-r.module').then((m) => m.SignalRModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

