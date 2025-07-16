import { Component } from '@angular/core';
import {Navigation} from "src/components/navigation/navigation";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-layout',
  imports: [
    Navigation,
    RouterOutlet
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
