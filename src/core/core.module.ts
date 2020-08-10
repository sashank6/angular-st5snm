import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';

@NgModule({
  imports: [CommonModule]
})
export class CoreModule {
  /**
   * Use this to import module in root application only once
   */
}