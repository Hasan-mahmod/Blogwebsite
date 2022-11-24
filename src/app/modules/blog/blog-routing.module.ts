import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { SinglebolgComponent } from './singlebolg/singlebolg.component';

const routes: Routes = [
  {path:'',children:[
    { path:'',component:BlogComponent },
    {path:'singleblog',component:SinglebolgComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
