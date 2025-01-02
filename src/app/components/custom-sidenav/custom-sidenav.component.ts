import {
  Component,
  computed,
  Input,
  OnInit,
  Signal,
  signal,
  ViewEncapsulation,
  WritableSignal,
} from '@angular/core';
import {
  MatListItem,
  MatListItemIcon,
  MatListItemTitle,
  MatNavList,
} from '@angular/material/list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
};

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [
    MatNavList,
    MatListItem,
    MatIcon,
    MatListItemIcon,
    MatListItemTitle,
    RouterLink,
    MatIconModule,
    MatListItem,
    MatListItemIcon,
    MatListItemTitle,
    MatNavList,
    RouterLinkActive,
  ],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
  animations: [
    trigger('fadein', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class CustomSidenavComponent implements OnInit {
  imageSrc: string = '/assets/profile-picture.jpg';

  menuItems: WritableSignal<MenuItem[]> = signal<MenuItem[]>([
    { icon: 'dashboard', label: 'Dashboard', route: 'dashboard' },
    { icon: 'work', label: 'Employee', route: 'employee' },
  ]);

  sidenavCollapsed: WritableSignal<boolean> = signal(false);
  imageSize: Signal<'50' | '100'> = computed((): '50' | '100' =>
    this.sidenavCollapsed() ? '50' : '100',
  );
  fadeInTrigger: boolean = false;

  @Input() set collapsed(value: boolean) {
    this.sidenavCollapsed.set(value);
  }

  ngOnInit(): void {
    setTimeout((): void => {
      if (!this.sidenavCollapsed()) {
        this.fadeInTrigger = true;
      }
    }, 10000);
  }
}
