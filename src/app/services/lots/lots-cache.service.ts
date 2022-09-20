import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LotsCacheService {
  private cacheKey = 'LOTS_CACHE';
  private cache: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor() {
    const persistedCache = localStorage.getItem(this.cacheKey);
    if (persistedCache && persistedCache.length > 0) {
      console.log('GETTING PERSISTED CACHE');
      this.cache.next(JSON.parse(persistedCache));
    }
  }

  cacheValue = (value: []): [] => {
    if (value.length === 0) {
      return value;
    }

    this.cache.next(value);

    localStorage.setItem(this.cacheKey, JSON.stringify(value, null, 0));

    console.log('CACHING VALUE ', value);
    return value;
  };

  getCachedValue = (): [] => {
    console.log('GETTING CACHED VALUE');
    return this.cache.value;
  };

  isCached = (): boolean => {
    return this.cache.value.length > 0;
  };

  expireCache = () => {
    console.log('EXPIRING CACHE');
    localStorage.removeItem(this.cacheKey);
    this.cache.next([]);
  };
}
