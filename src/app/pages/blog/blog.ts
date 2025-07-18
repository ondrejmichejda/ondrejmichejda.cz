import {Component, inject, OnInit, signal} from '@angular/core';
import {HttpService} from "src/services/http.service";
import {BlogItem} from "src/types/blog-item";
import {DatePipe} from "@angular/common";

@Component({
    selector: 'app-blog',
    imports: [
        DatePipe
    ],
    templateUrl: './blog.html',
    styleUrl: './blog.css'
})
export class Blog implements OnInit {

    blogItems = signal<BlogItem[]>([]);
    private httpSvc = inject(HttpService)

    ngOnInit() {
        this.httpSvc.getBlog().subscribe(items => this.blogItems.set(items));
    }
}
