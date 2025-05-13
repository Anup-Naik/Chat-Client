export interface User {
  _id?: string;
  username: string;
  email: string;
  avatar: string;
  password?: string;
  confirmPassword?: string;
  oldPassword?:string;
  createdAt?: Date;
}

export interface Settings {
  userBg: string;
  chatBg: string;
}

export interface AppState {
  jwt: string;
  settings: Settings;
  user: User | null;
}
