import { Injectable } from '@angular/core';

export interface IconFiles {
  imageFile: string;
  link: string;
  alt: string;
}

export interface FrameworkConfigSettings {
  showLanguageSelector?: boolean;
  showUserControls?: boolean;
  showStatusBar?: boolean;
  showStatusBarBreakPoint?: number;
  socialIcons?: Array<IconFiles>;
}

@Injectable()
export class FrameworkConfigService {

  showLanguageSelector = true;
  showUserControls = true;
  showStatusBar = true;
  showStatusBarBreakPoint = 0;
  socialIcons = new Array<IconFiles>();

  configure(settings: FrameworkConfigSettings): void {
    Object.assign(this, settings);
  }

}
