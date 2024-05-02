import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { LoginFormComponent } from "./login-form.component";
import { RouterLink } from "@angular/router";

@NgModule({
    imports:[CommonModule,FormsModule,IonicModule,RouterLink],
    declarations:[LoginFormComponent],
    exports:[LoginFormComponent]
}) export class LoginFormModule{}