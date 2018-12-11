import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./component/home/home.component";
import { HeaderComponent } from "./component/shared/header/header.component";
import { FooterComponent } from "./component/shared/footer/footer.component";
import { HomeModule } from "./component/home/home.module";

const MODULES = [HomeModule];

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, ...MODULES],
  exports: [...MODULES],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
