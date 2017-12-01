import { Component, OnInit, Input } from '@angular/core';
import { MenuService, MenuItem } from '../../services/menu.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'fw-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.css']
})
export class PopupMenuComponent implements OnInit {

  @Input() menu: Array<MenuItem>;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

}
