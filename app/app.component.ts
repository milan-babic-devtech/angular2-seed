import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {StarComponent} from './star.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Waka Waka Hey Hey</h1>
        <courses></courses>
        <authors></authors>
        <star [is-favorite]="post.isFavorite"></star>
        `,
    directives: [CoursesComponent, AuthorsComponent, StarComponent]
})
export class AppComponent { 
     post = {
         title: "Title",
         isFavorite: true
     }
}