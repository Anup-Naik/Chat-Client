import { User } from "./user";

export interface Message {
  recipient: string;
  content: string;
}

export type MyServerResponse =
  | {
      status: 'error';
      data: { message: string };
    }
  | {
      status: 'success';
      data:
        | {
            token: string;
            data: User;
          }
        | User;
    };
