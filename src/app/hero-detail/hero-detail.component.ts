import { NgIf, UpperCasePipe } from '@angular/common';
import {Hero} from '../hero';
import {Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
  imports: [
    NgIf,
    UpperCasePipe,
    FormsModule
  ]
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
