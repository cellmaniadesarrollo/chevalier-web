import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent {
constructor(private titulo:Title){
  titulo.setTitle('Chevalier')
}
  abrirLink(url: string){
    window.open(url, "_blank");
}
}
