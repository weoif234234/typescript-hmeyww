import { User } from './User';

export class ChatMessage {
  public time: number;
  public sender: User;
  public text: string;

  constructor(sender: User, time: number, text: string) {
    this.sender = sender;
    this.time = time;
    this.text = text;
  }
}
