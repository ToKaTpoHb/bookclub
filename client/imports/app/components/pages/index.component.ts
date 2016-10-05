import {Component} from '@angular/core'


@Component({
    selector: 'app-index-page',
    template:
        `
        <div class="jumbotron">
            <div class="container text-center">
                <h1>BookClub</h1>
                <p>Читай любимые книги. На любом устройстве</p>
                <p><a class="btn btn-primary btn-lg" [routerLink]="['/books']" role="button">Вперед, к книгам!</a></p>
            </div>
        </div>
        `
})

export class IndexPageComponent
{

}
