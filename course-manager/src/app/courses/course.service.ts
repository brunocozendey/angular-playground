import { Course } from './course';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CourseService {

    retrieveAll(): Course[] {
        return COURSES;
    }
}

var COURSES: Course[] = [
    {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: '../assets/images/forms.png',
        price: 99.99,
        code: 'XPS-8796',
        duration: 120,
        rating: 4.5,
        releaseDate: 'November, 2, 2020',
        description: 'NEste curso os alunos aprenderão sobre forms em angular.' 
    },
    {   id: 2,
        name: 'Angular: HTTP',
        imageUrl: '../assets/images/http.png',
        price: 45.99,
        code: 'LKL-1094',
        duration: 80,
        rating: 3,
        releaseDate: 'November, 4, 2020',
        description: 'NEste curso os alunos aprenderão sobre HTTP em angular.'
    }

]