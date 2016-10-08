import {Component, OnInit} from '@angular/core'
import {ActivatedRoute, Params} from "@angular/router";
import {Observable} from "rxjs";

@Component({
    selector: 'app-navbar',
    template: `
<nav class="navbar navbar-default"
    style="border-radius: 0; margin-bottom: 0;"
>
    <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" [routerLink]='["/index"]' >BookClub</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li><a [routerLink]="['/books']">Все книги</a></li>
                <li><a [routerLink]="['/books/upload']">Загрузка книги</a></li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>`

})

export class NavbarComponent implements OnInit
{
    linkList: any[]

    constructor(
        private route: ActivatedRoute
    ){
        const url: Observable<string> = route.url.map(s => s.join(''));
    }

    ngOnInit()
    {
        this.route.params.forEach((params: Params) => {

        });
    }
}