import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { ListsComponent } from './components/lists/lists.component';
import { EditComponent } from './components/edit/edit.component';



const routes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'lista', component: ListsComponent },
  { path: 'editar/:id', component: EditComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
