import { Component, Input } from '@angular/core';
import { ISocialInfo } from 'src/app/mock/mock';

@Component({
  selector: 'app-social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.css']
})
export class SocialInfoComponent {

  @Input()
  public socialInfo: ISocialInfo;
}
