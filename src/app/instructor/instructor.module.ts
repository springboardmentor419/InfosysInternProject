import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorApplyComponent } from './components/instructor-apply/instructor-apply.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component'; // Import NavigationBarComponent

@NgModule({
  declarations: [
    InstructorApplyComponent, 
    NavigationBarComponent // Add NavigationBarComponent to declarations
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InstructorApplyComponent, 
    NavigationBarComponent // Export NavigationBarComponent if needed elsewhere
  ]
})
export class InstructorModule {}
