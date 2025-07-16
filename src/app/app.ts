import {Component, signal} from '@angular/core';
import {Layout} from "src/components/layout/layout";

@Component({
    selector: 'app-root',
    imports: [
        Layout
    ],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected readonly title = signal('ondrejmichejda');
}
