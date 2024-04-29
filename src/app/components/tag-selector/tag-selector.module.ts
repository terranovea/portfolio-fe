import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { TagSelectorComponent } from "./tag-selector.component";
import { TagModule } from "../tag/tag.module";

@NgModule({
    imports:[CommonModule,FormsModule,IonicModule,TagModule],
    declarations:[TagSelectorComponent],
    exports:[TagSelectorComponent]
}) export class TagSelectorModule{}