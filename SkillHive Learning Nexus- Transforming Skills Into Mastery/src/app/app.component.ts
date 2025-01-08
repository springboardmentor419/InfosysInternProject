import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule here

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Skillhive Learning Nexus';
}

