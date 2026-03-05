export interface DisplayMsg {
  ok: boolean;
  msg: string;
}

export interface ContactData extends Record<string, unknown> {
  name: string;
  email: string;
  message: string;
}
