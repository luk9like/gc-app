import {Directive, ElementRef, EventEmitter, HostBinding, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[gcDragDrop]'
})

export class DragDropDirective {
  @Output() private filesChangeEmiter: EventEmitter<FileList> = new EventEmitter();

  @HostBinding('style.borderColor') private borderColor = '#999';

  constructor(elr: ElementRef) {
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
    if(files.length > 0) {
      console.log(evt);
      this.borderColor = '#999';
      this.filesChangeEmiter.emit(files);
    }
  }
}
