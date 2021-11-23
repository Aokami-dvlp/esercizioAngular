import { NotFoundComponent } from './not-found/not-found.component';
import { OrderContainerComponent } from './order-container/order-container.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'users', component: UserContainerComponent},
  {path: 'orders', component: OrderContainerComponent},
  {path: '', component: UserContainerComponent},
  {path: '**', component:NotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
