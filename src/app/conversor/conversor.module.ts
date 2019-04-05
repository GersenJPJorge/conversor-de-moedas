import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';
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
  providers: [
    MoedaService,
    ConversorService,
  ]
})
export class ConversorModule { }
