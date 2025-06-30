export interface EventItem {
  title: string;
  year?: string | undefined;
  link?: string | undefined;
}

export interface EducationEvent {
  title: string;
  schoolName: string;
  year: string;
  advisor: string;
  researchInterest: string;
  icon: string;
  degreeLevel: string;
  status: string;
}

export interface ExperienceEvent {
  title: string;
  type: string;
  location: string;
  year: string;
  description?: string;
}
