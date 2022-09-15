import { Injectable } from '@angular/core';
import locale from './locale';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  language: 'en-US' | 'pt-BR' = 'en-US';
  translations: any;

  constructor() {
    this.translations = locale(this.language);
  }

  setLanguage(language: 'en-US' | 'pt-BR') {
    this.language = language;
    this.translations = locale(this.language);
  }

  translate(ref: string, dataToReplace: any[]) {
    if (!ref) return null;
    let translation = this.translations[ref];

    if (!translation) return ref;

    dataToReplace?.forEach((value, index) => {
      translation = translation.replace(`{{${index}}}`, value);
    });

    return translation;
  }
}
