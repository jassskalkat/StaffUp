import {
  Component,
  computed,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { CustomSidenavComponent } from '../../components/custom-sidenav/custom-sidenav.component';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from '@angular/material/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CustomSidenavComponent,
    MatIcon,
    MatIconButton,
    MatSidenav,
    MatSidenavContainer,
    RouterOutlet,
    MatToolbar,
    MatSidenavContent,
    NgOptimizedImage,
    RouterLink,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  collapsed: WritableSignal<boolean> = signal(false);
  sidenavWidth: Signal<'60px' | '250px'> = computed((): '60px' | '250px' =>
    this.collapsed() ? '60px' : '250px',
  );
}
