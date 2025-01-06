import { Component , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./authentication/components/header/header.component";
import { FooterComponent } from "./authentication/components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'Skill Hive Learning Nexus';
}
