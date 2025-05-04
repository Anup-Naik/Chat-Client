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
        | any
        | {
            token: string;
            data: any;
          };
    };
