import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { AchievementGridComponent } from "./achievement-grid.component";
import { AchievementCardComponent } from "./achievement-card/achievement-card.component";
import { AddCardComponent } from "./add-card/add-card.component";

@NgModule({
    imports:[CommonModule,FormsModule,IonicModule],
    declarations:[AchievementGridComponent, AchievementCardComponent,AddCardComponent],
    exports:[AchievementGridComponent]
}) export class AchievementGridModule{}