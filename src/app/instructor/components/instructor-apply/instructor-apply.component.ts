import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsletterComponent } from '../newsletter/newsletter.component';


@Component({
  selector: 'app-instructor-apply',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './instructor-apply.component.html',
  styleUrl: './instructor-apply.component.css'
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