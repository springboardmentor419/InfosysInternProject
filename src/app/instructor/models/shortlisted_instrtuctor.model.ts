export interface shortlisted_instructor {
    fullName: string;
    teachingDomain: String;
    upcoming_courses: string;
    start_date: string;
    end_date: string;
    candidateEnrolled: number;
    instructorRating: number;   
}

export interface iselectedFilters {
    ratings: string[], subjects: string[]
  };