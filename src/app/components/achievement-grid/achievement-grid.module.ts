import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { AchievementGridComponent } from "./achievement-grid.component";
import { AddCardComponent } from "./add-card/add-card.component";
import { RouterLink } from "@angular/router";
import { AchievementCardComponent } from "./achievement-card/achievement-card.component";

@NgModule({
    imports:[CommonModule,FormsModule,IonicModule,RouterLink],
    declarations:[AchievementGridComponent,AddCardComponent,AchievementCardComponent],
    exports:[AchievementGridComponent]
}) export class AchievementGridModule{}