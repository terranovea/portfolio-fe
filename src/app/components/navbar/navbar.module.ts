import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { NavbarComponent } from "./navbar.component";
import { ToolbarSearchbarModule } from "../toolbar-searchbar/toolbar-searchbar.module";

@NgModule({
    imports:[CommonModule,FormsModule,IonicModule,ToolbarSearchbarModule],
    declarations:[NavbarComponent],
    exports:[NavbarComponent]
}) export class NavbarModule{}