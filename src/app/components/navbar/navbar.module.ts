import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NavbarComponent } from "./navbar.component";
import { ToolbarSearchbarModule } from "../toolbar-searchbar/toolbar-searchbar.module";
import { LoginFormModule } from "../login-form/login-form.module";
import { RouterLink } from "@angular/router";

@NgModule({
    imports:[CommonModule,FormsModule,IonicModule,ToolbarSearchbarModule,LoginFormModule,RouterLink],
    declarations:[NavbarComponent],
    exports:[NavbarComponent]
}) export class NavbarModule{}