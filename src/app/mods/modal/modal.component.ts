import { ElementRef, EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter();
  
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    console.log("Leving Modal!");
    this.el.nativeElement.remove();
  }

  onCloseClick() {
    this.close.emit(); 
  }
}
