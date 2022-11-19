import { User } from '../Model/User';
import { ChatMessage } from '../Model/ChatMessage';

export class ChatView {
  private $: any = window['$'];
  private _messages: string[];
  constructor() {}

  public MessageArrived(message: ChatMessage) {
    var messageString = `${message.time.toString()} ${
      message.sender.name
    }: ${this.escapeHtml(message.text)}`;
    this.$('#chat_text')[0].textContent += messageString;
    this.$('#chat_text')[0].innerHTML += '<br>';
  }

  private escapeHtml(unsafe: string) {
    return unsafe
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}
