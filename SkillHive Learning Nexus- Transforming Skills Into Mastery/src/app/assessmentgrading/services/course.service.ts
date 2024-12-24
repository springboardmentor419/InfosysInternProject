import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, scheduled } from 'rxjs';
import { map  ,switchMap} from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = 'http://localhost:3000/course';

  constructor(private http: HttpClient) { }

  course : any[] = []

  getCourses(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((courses) => {
        this.course = courses; 
        return courses;
      })
    );
  }

  createAssessment(courseId: number, assessmentData: any): Observable<any> {

    return this.http.get<any[]>(this.apiUrl).pipe(
      map(courses => {
        const course = courses.find(course => course.courseId === courseId);
        if (course) {
          assessmentData.assessmentID =uuidv4();
          assessmentData.createdAt = new Date().toISOString();
          assessmentData.scheduled = {
            isScheduled : false ,
            scheduledDetails : ''
          }
          course.assessment.push(assessmentData);
          const courseIdInDb = course.id;
          return course;
        } else {
          throw new Error('Course not found');
        }
      }),
      switchMap((course) => {
        return this.http.patch<any>(`${this.apiUrl}/${course.id}`, course, {
          headers: { 'Content-Type': 'application/json' }
        });
      })
    );
  }

  scheduleAssessment(courseId: number , assessmentID:string , scheduleDetails : any): Observable<any>{

    return this.http.get<any[]>(this.apiUrl).pipe(
      map(courses => {
        const course = courses.find(course => course.courseId === courseId);
        if (course) {
          const selectedAssessment = course.assessment.find((assessments :any) => assessments.assessmentID === assessmentID)
          if (selectedAssessment) {
            if (!selectedAssessment.schedule) {
              selectedAssessment.schedule = {};
            }
            selectedAssessment.schedule.isScheduled = true;
            selectedAssessment.schedule.scheduledDetails = scheduleDetails;
            return course; 
          } else {
            throw new Error('Assessment not found');
          }
        } else {
          throw new Error('Course not found');
        }
      }),
      switchMap((course) => {
        return this.http.patch<any>(`${this.apiUrl}/${course.id}`, course, {
          headers: { 'Content-Type': 'application/json' }
        });
      })
    );
}

deleteAssessment(courseId: number, assessmentID:string): Observable<any> {

  return this.http.get<any[]>(this.apiUrl).pipe(
    map(courses => {
      const course = courses.find(course => course.courseId === courseId);
      console.log(courseId, assessmentID)
      if (course) {
        const assessIndex = course.assessment.findIndex(
          (assess:any) => assess.assessmentID === assessmentID
        )
        if (assessIndex !== -1) {
          course.assessment.splice(assessIndex, 1);
        }
        return course;
      } else {
        throw new Error('Course not found');
      }
    }),
    switchMap((course) => {
      return this.http.patch<any>(`${this.apiUrl}/${course.id}`, course, {
        headers: { 'Content-Type': 'application/json' }
      });
    })
  );
}
}
