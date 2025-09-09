import test from '@playwright/test';
import { BasePage } from './BasePage';
export class MainPage extends BasePage {
  async open() {
    this.page.goto('https://genshin.hoyoverse.com/ru/home');
  }
}
