import { Component,
   OnInit,
   Input,
   ViewEncapsulation,
   OnChanges,
   SimpleChanges,
   DoCheck,
   AfterContentInit,
   AfterContentChecked,
   AfterViewChecked, 
   AfterViewInit, 
   OnDestroy, 
   ViewChild, 
   ElementRef,
   ContentChild
   } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //defaults to emulated, emulates shadowDom
})
export class ServerElementComponent implements 
 OnInit,
 OnChanges,
 DoCheck,
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string}; 
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef; 
  constructor() {
    console.log('constructor called!')
   }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges Called');
    console.log(changes)
    }

  ngOnInit() {
    console.log('ngOnInit Called');
    console.log(this.header.nativeElement.textContent);
    console.log('Text Content of Paragraph' + this.paragraph.nativeElement.textContent)
  }

  ngDoCheck(){
    console.log('ngDoCheckCalled');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit Called');
    console.log('Text Content of Paragraph' + this.paragraph.nativeElement.textContent); 

  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewChaecked called');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Called');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called')
  }
}
