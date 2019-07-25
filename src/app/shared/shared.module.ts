import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';

import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, NgZorroAntdModule, CommonModule],
  declarations: [LoaderComponent],
  exports: [LoaderComponent, NgZorroAntdModule]
})
export class SharedModule {}
