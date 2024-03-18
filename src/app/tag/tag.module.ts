import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { TagComponent } from "./tag.component";

@NgModule({
    imports:[CommonModule,FormsModule,IonicModule],
    declarations:[TagComponent],
    exports:[TagComponent]
}) export class TagModule{}