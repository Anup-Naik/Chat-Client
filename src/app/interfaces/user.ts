export interface User {
  _id: string;
  username: string;
  email: string;
  avatar: string;
  password: string;
  confirmPassword: string;
  createdAt: Date;
}

export interface Settings {
  userBg: string;
  chatBg: string;
}
