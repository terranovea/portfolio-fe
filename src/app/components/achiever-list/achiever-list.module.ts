import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { AchieverListComponent } from "./achiever-list.component";
import { AchieverItemComponent } from "./achiever-item/achiever-item.component";

@NgModule({
    imports:[CommonModule,FormsModule,IonicModule],
    declarations:[AchieverListComponent, AchieverItemComponent],
    exports:[AchieverListComponent]
})
export class AchieverListModule{}