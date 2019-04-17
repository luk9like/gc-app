import {Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[gcDragDrop]'
})

export class DragDropDirective {
  @Output() private filesChangeEmiter: EventEmitter<File[]> = new EventEmitter();
  @Input() private allowed_ext: Array<string> = [];

  @HostBinding('style.borderColor') private borderColor = '#999';

  constructor() {
  }
  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.borderColor = 'red';
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.borderColor = '#999';
  }

  @HostListener('drop', ['$event']) public onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    let files = evt.dataTransfer.files;
    let validFiles: Array<File> = [];

    if ( files.length > 0 ) {
      this.borderColor = '#999';
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
