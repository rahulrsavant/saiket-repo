import { AfterViewInit, Component, ElementRef, OnInit,ViewChild} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit,AfterViewInit {

  @ViewChild('somecontent')  sc: any;
  
  constructor() 
  {
    console.log("inside constructor "+this.sc);
   }
  ngAfterViewInit(): void {
    
    this.sc.nativeElement.innerHTML="change";
    console.log("inside after view init "+this.sc.nativeElement);
  }

  ngOnInit(): void {
  }

}
