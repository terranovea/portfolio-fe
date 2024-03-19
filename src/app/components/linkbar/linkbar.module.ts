import { NgModule } from "@angular/core";
import { LinkbarComponent } from "./linkbar.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";

@NgModule({
    imports:[CommonModule,FormsModule,IonicModule],
    declarations:[LinkbarComponent],
    exports:[LinkbarComponent]
}) export class LinkbarModule{}