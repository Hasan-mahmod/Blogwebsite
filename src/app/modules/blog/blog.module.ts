import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { SinglebolgComponent } from './singlebolg/singlebolg.component';


@NgModule({
  declarations: [
    BlogComponent,
    SinglebolgComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
