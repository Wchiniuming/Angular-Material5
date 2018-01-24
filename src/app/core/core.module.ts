import { NgModule, SkipSelf, Optional } from '@angular/core';
import { MatIconRegistry} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { loadSvgResources } from '../utils/svg.util';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    HttpModule, SharedModule, AppRoutingModule, BrowserAnimationsModule
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent
  ],
  exports: [
    HeaderComponent, FooterComponent, SidebarComponent, AppRoutingModule, BrowserAnimationsModule
  ]
})
export class CoreModule {
  constructor(
    @SkipSelf() @Optional() parent: CoreModule,
    ir: MatIconRegistry,
    ds: DomSanitizer
    ) {
    if (parent) {
      throw new Error('模块已存在，不能再次加载！');
    }
    loadSvgResources(ir, ds);
  }
}
