import { ViewEncapsulation } from '@angular/core';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NotFoundComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    document.getElementsByTagName('body')[0].classList.add('bgBody')
  }
  ngOnDestroy(): void {
    document.getElementsByTagName('body')[0].classList.remove('bgBody')
  }

}
