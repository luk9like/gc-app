import {Directive, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';

/**
 * Drop Directive
 */
@Directive({
  selector: '[gcDragDrop]'
})

export class DragDropDirective {
  /**
   * Event as File
   */
  @Output() private filesChangeEmiter: EventEmitter<File[]> = new EventEmitter();
  /**
   * Allowed Extentions for Upload
   */
  @Input() private allowed_ext: Array<string> = [];

  /**
   * Bind the Bordercolor of the dropzone
   */
  @HostBinding('style.borderColor') private borderColor = '#999';

  /**
   * Hostlistener for Dragover
   */
  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.borderColor = 'red';
  }

  /**
   * Hostlistener for Dragleave
   */
  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.borderColor = '#999';
  }

  /**
   * Hostlistener for Drop
   */
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
