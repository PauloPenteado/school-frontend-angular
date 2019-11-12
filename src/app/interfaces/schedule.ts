import { Course } from './course';
import { Employee } from './employee';

export interface Schedule {
    id: number;
    course: Course;
    instructor: Employee;
    level: string;
    day: number;
    hour: number;
    minutes: number;
}
