import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-input.html',
  styleUrl: './custom-input.css',
})
export class CustomInput {}
