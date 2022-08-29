import { Component, Input } from '@angular/core';

@Component({
  selector: 'menu-link',
  templateUrl: './menu-link.component.html',
  styleUrls: ['./menu-link.component.scss']
})
export class MenuLinkComponent {
  @Input()
  route!: string;
}
