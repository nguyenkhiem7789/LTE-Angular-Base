import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmojiMartComponent } from './emoji-mart.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ChartComponent} from '../chart/chart.component';

@NgModule({
  declarations: [
    EmojiMartComponent
  ],
  imports: [
    CommonModule,
    PickerModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmojiMartComponent,
      },
    ]),
  ]
})
export class EmojiMartModule { }
