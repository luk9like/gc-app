import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';

/**
 * Select Directive
 */
@Directive({
  selector: '[gcSelect]'
})
export class SelectDirective {
  /**
   * Event as File
   */
  @Output() private filesChangeEmiter: EventEmitter<File[]> = new EventEmitter();
  /**
   * Allowed extentions of images for Upload
   */
  @Input() private allowed_ext: Array<string> = [];

  /**
   * Hostlistener for Change Event
   */
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
