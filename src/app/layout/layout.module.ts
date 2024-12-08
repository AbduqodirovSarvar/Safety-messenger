import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from '../services/pipes/truncate.pipe';
import { ServicesModule } from '../services/services.module';
import { RouterModule } from '@angular/router';
import { SettingComponent } from './setting/setting.component';


@NgModule({
  declarations: [ChatComponent, SettingComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    ServicesModule,
    RouterModule,
  ]
})
export class LayoutModule { }
