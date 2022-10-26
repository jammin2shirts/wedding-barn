import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ScriptServiceService } from 'src/app/service/script-service.service';

declare var $: any;
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit, OnDestroy {

  constructor(private renderer:Renderer2, private scriptService:ScriptServiceService) { }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    // const scriptElement = this.scriptService.loadJsScript(this.renderer, 'assets/js/honeybook-form.js');
    console.log('loaded')
    // var elements = document.getElementsByClassName('hb-p-633da926aa7d8e0009eb7aad-1');//.item.contentWindow.location.reload();
    // // document.getElementById('id').src += '';
    // console.log(<HTMLElement>elements[0]);
    // (<HTMLElement>elements[0]).src +='';

    // let myScript = document.createElement("script");
    // myScript.type = 'text/javascript';
    // myScript.async = true;
    // myScript.src='assets/js/honeybook-form.js';
    // document.body.appendChild(myScript)
    
  }
 
  
}
