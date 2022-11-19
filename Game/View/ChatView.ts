import { User } from '../Model/User';
import { ChatMessage } from '../Model/ChatMessage';

export class ChatView {
  private $: any = window['$'];
  private _messages: string[] = [];
  constructor() {}

  public MessageArrived(message: ChatMessage) {
    var date = new Date(message.time);
    var messageString = `<b>${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${ message.sender.name }:</b> ${this.escapeHtml(message.text)}`;
    
    this._messages.push(messageString);
    
    this.$('#chat_text')[0].innerHTML = this._messages.join("<br>");
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
