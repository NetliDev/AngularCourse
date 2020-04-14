import {
  Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, ElementRef,
  ViewChild, OnDestroy, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Para encapsular estilos de CSS, por default es esta opcion, pero se puede escoger None,Native
})

export class ServerElementComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('srvElement') element: { type: string, name: string, content: string }; //representa nuestro server
  @ViewChild('heading', { static: false }) header: ElementRef;
  @ContentChild('contentParagraph', { static: false }) paragraph:ElementRef;

  constructor() {
    console.log("Contructor Call");
  }

  ngOnInit() {
    console.log("ngOnInit Call");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges Call");
    console.log(changes);
  }

  ngDoCheck() {
    console.log("ngDoCheck Call");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit Call");
    console.log("Text Content of paragraph : " + this.paragraph.nativeElement.textContent);

  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked Call");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit Call");
    console.log("Text Content: " + this.header.nativeElement.textContent);

  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked Call");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy Call");
  }

}
