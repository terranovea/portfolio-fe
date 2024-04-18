import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { LoginFormComponent } from "./login-form.component";

@NgModule({
    imports:[CommonModule,FormsModule,IonicModule],
    declarations:[LoginFormComponent],
    exports:[LoginFormComponent]
}) export class LoginFormModule{}