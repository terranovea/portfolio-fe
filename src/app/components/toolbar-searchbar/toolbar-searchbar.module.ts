import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { ToolbarSearchbarComponent } from "./toolbar-searchbar.component";

@NgModule({
    imports:[CommonModule,FormsModule,IonicModule],
    declarations:[ToolbarSearchbarComponent],
    exports:[ToolbarSearchbarComponent]
}) export class ToolbarSearchbarModule{}