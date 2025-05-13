import { Component, ElementRef, inject, output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-nav',
  imports: [ReactiveFormsModule],
  templateUrl: './user-nav.component.html',
  styleUrl: './user-nav.component.scss',
})
export class UserNavComponent {
  elementRef = inject(ElementRef);
  searchForm = new FormGroup({
    search: new FormControl(''),
  });
  enableSearch = signal(false);
  showSettings = output();

  onSubmit() {
    console.log(this.searchForm.value.search);
  }

  toggleSearch() {
    this.enableSearch.update((prev) => !prev);
    if (this.enableSearch())
      this.elementRef.nativeElement.querySelector('input').focus();
  }

  emitSettingEvent(){
    this.showSettings.emit();
  }
}
