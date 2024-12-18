import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required 
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
// for *ngIf


@Component({
  selector: 'app-instructor-apply',
  standalone: true, // Standalone component
  imports: [CommonModule, NavigationBarComponent], // Import CommonModule for directives
  templateUrl: './instructor-apply.component.html',
  styleUrls: ['./instructor-apply.component.scss']
})
export class InstructorApplyComponent {
  // Track the selected tab
  selectedTab: 'requirements' | 'rules' = 'requirements';
  imageUrl: string = 'assets/images/banner.png';

  // Show Requirements tab
  showRequirements() {
    this.selectedTab = 'requirements';
  }

  // Show Rules tab
  showRules() {
    this.selectedTab = 'rules';
  }
}
