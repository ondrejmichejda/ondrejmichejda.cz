import {inject, Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BlogItem} from "src/types/blog-item";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private http = inject(HttpClient)

    /**
     * Fetches the list of blog items from the server.
     *
     * @return {Observable<BlogItem[]>} An observable emitting an array of BlogItem objects.
     */
  getBlog(): Observable<BlogItem[]> {
    return this.http.get('blog.json').pipe(
        map(response => {
          return ((response as any).blog as BlogItem[]).map(item => {
              return {
                  ...item,
                  date: new Date(item.date)
              }
          })
        })
    )
  }
}
