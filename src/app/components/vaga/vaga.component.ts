import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vaga',
  templateUrl: './vaga.component.html',
  styleUrls: ['./vaga.component.scss']
})
export class VagaComponent implements OnInit {
  id: string = '';

  @Input()
  vaga: any = null;

  img: string = '';

  selectedOption(option: string) {
    console.log(this.id, option);
  }

  ngOnInit(): void {
    this.id = this.vaga.number;
    if (this.vaga.disponivel) {
      this.img = 'assets/vaga-disponivel.jpeg';
    } else {
      this.img = 'assets/vaga-ocupada.jpeg';
    }
  }
}
