import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vaga',
  templateUrl: './vaga.component.html',
  styleUrls: ['./vaga.component.scss']
})
export class VagaComponent implements OnInit {
  id: string|null = null;

  @Input()
  vaga: any = null;

  img: string = '';

  ngOnInit(): void {
    this.id = this.vaga.id
    if (this.vaga.disponivel) {
      this.img = 'assets/vaga-disponivel.jpeg';
    } else {
      this.img = 'assets/vaga-ocupada.jpeg';
    }
  }

}
