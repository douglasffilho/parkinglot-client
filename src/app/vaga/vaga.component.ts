import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vaga',
  templateUrl: './vaga.component.html',
  styleUrls: ['./vaga.component.scss']
})
export class VagaComponent implements OnInit {
  @Input()
  disponivel: Boolean = true;

  @Input()
  id: string|null = null;

  img: string = '';

  ngOnInit(): void {
    if (this.disponivel) {
      this.img = 'assets/vaga-disponivel.jpeg';
    } else {
      this.img = 'assets/vaga-ocupada.jpeg';
    }
  }

}
