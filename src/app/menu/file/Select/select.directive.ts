import {Directive, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[gcSelect]'
})
export class SelectDirective {
  @Output() private filesChangeEmiter: EventEmitter<File[]> = new EventEmitter();
  @Input() private allowed_ext: Array<string> = [];

  constructor(elr: ElementRef) {}

  @HostListener('change', ['$event']) public onChange(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    const files = evt.target.files;
    const validFiles: Array<File> = [];

    if ( files.length > 0 ) {
      for ( let file of files ) {
        let ext = file.type;

        if ( this.allowed_ext.includes(ext)) {
          validFiles.push(file);
          this.filesChangeEmiter.emit(validFiles);
        } else {
          alert('Falsches Dateiformat! Bitte wähle eine .png-Datei aus.');
        }
      }
    }
  }

}
