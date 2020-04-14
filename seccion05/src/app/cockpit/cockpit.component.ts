import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string, 
    serverContent: string}>(); //poner un alias
  
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput',{static: false}) serverContentInput : ElementRef;

  constructor() { }

  ngOnInit() {
    // is a lifecycle Hook
  }
  onAddServer(nameInput: HTMLInputElement) {
    // console.log(a);
    // console.log(a.value);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent : this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent : this.serverContentInput.nativeElement.value
    });
  }
}
