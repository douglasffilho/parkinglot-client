import { Component } from '@angular/core';
import { TranslateService } from 'src/app/services/translate/translate.service';
import messageSubscribers from 'src/app/subscribers/messageSubscribers';

const CLASS_MAP: any = {
  error: 'error',
  warning: 'warning',
  info: 'info',
  default: 'info',
};

const FONT_ICON_MAP: any = {
  error: 'warning',
  warning: 'warning',
  info: 'info',
  default: 'info',
};

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  type: string = 'info';

  message: string = '';

  show: boolean = false;

  constructor(private translateService: TranslateService) {
    // this.translateService.setLanguage('pt-BR');
    messageSubscribers.subscribe(this.notify);
  }

  notify = (notification: { message: string, type: "info"|"error"|"warning" }) => {
    this.message = notification.message;
    this.translateMessage();
    this.type = notification.type;
    this.show = true;
    setTimeout(() => { this.show = false; }, 3000);
  }

  getClass(): string {
    return `message ${CLASS_MAP[this.type] ?? CLASS_MAP.default}${
      this.show ? ' show' : ''
    }`;
  }

  renderDefault(): boolean {
    return this.type !== 'warning' && this.type !== 'error';
  }

  renderError(): boolean {
    return this.type === 'error';
  }

  renderWarning(): boolean {
    return this.type === 'warning';
  }

  translateMessage = () => {
    const messageParts = this.message.split(':');

    if (messageParts.length > 1) {
      const [error, data] = messageParts;
      const dataToReplace = [data];
      this.message = this.translateService.translate(error, dataToReplace) ?? this.message;
    }

    this.message = this.translateService.translate(this.message, []) ?? this.message;
  }
}