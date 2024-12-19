import { Component } from '@angular/core';
import { RouterModule,} from '@angular/router';
import { NavigationBarComponent } from './instructor/components/navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,NavigationBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProject';
}
