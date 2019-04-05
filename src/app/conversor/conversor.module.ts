import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversorComponent } from './components';
0
@NgModule({
  declarations: [
    ConversorComponent],
  imports: [
    CommonModule,
  ],
  exports: [                                              // se usar rotas tem que ter o exports
    ConversorComponent
  ],
})
export class ConversorModule { }
