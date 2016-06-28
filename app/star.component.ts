import {Component, Input} from 'angular2/core'

@Component ({
    selector: 'star',
    template: `<span class = "glyphicon "
                (click) = "onClick()"
                [class.glyphicon-star-empty] = "!isFavorite"
                [class.glyphicon-star] = "isFavorite"
            ></span>
            `,
            inputs: ['isFavorite:is-favorite']

})
export class StarComponent {
    @Input('is-favorite') isFavorite = false;

    onClick() {
        this.isFavorite = !this.isFavorite;
    }
}
