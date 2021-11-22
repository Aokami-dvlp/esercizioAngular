import { OrderContainerComponent } from './order-container/order-container.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
{
  path:"Users",
  component: UserContainerComponent
},
{
  path:"",
  component: UserContainerComponent
},
{
  path:"Orders",
  component: OrderContainerComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
