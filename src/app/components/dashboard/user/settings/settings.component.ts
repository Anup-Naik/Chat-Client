import {
  Component,
  computed,
  inject,
  input,
  OnInit,
  output,
  signal,
} from '@angular/core';
import { AppStateService } from '../../../../services/AppState.service';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-settings',
  imports: [ReactiveFormsModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent implements OnInit {
  showSettings = input();
  closeSettings = output();
  formBuilder = inject(FormBuilder);
  appState = inject(AppStateService);
  user = computed(this.appState.user);
  userForm = this.formBuilder.group({
    avatar: this.formBuilder.control(this.user()?.avatar),
    username: this.formBuilder.control(this.user()?.username),
    email: this.formBuilder.control(this.user()?.email),
  });
  passwordForm = this.formBuilder.group({
    oldPassword: this.formBuilder.control(''),
    password: this.formBuilder.control(''),
    confirmPassword: this.formBuilder.control(''),
  });
  appSettingForm = this.formBuilder.group({
    bgUrl: this.formBuilder.control(1),
    selectBg: this.formBuilder.control<'userBg' | 'chatBg'>('userBg'),
  });

  ngOnInit(): void {
    this.appSettingForm.setValue({
      bgUrl: this.appState.getBgSetting('userBg'),
      selectBg: 'userBg',
    });
  }

  closeSettingsWindow() {
    this.closeSettings.emit();
  }

  changeBg(action: 'prev' | 'next' | 'switch' | 'save') {
    const imgId = this.appSettingForm.value.bgUrl;
    const switchProp = this.appSettingForm.value.selectBg;
    if (!imgId || !switchProp) return;
    if (action === 'prev' && imgId > 1) {
      this.appSettingForm.value.bgUrl = imgId - 1;
    }
    if (action === 'next' && imgId < 18) {
      this.appSettingForm.value.bgUrl = imgId + 1;
    }
    if (action === 'switch') {
      this.appSettingForm.setValue({
        bgUrl: this.appState.getBgSetting(switchProp),
        selectBg: switchProp,
      });
    }
    if (action === 'save') {
      this.appState.setBgSetting(switchProp, imgId);
    }
  }
}
