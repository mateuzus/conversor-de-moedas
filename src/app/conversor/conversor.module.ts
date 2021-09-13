import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';
import { FormsModule } from '@angular/forms';
import { NumeroDirective } from './directives';





@NgModule({
  declarations: [
    ConversorComponent,
    NumeroDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    
    
  ],
  exports: [
    ConversorComponent
  ],
  providers: [
    MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
