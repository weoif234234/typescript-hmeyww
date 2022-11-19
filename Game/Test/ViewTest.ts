import { ChainView } from "../../Game/View/ChainView";
import {User} from "../Model/User";
import {ChatMessage} from "../Model/ChatMessage";

export class ViewTest {
  constructor() {}

  public Run() {
    this.TestChat();
  }

  public TestChat() {
    ((window as any).chain as ChainView).chat.MessageArrived(new ChatMessage(new User("0x34rtgertgae", "jora123"), Date.now(), "hi all, how are you?"));
    ((window as any).chain as ChainView).chat.MessageArrived(new ChatMessage(new User("0x34rtgertgae", "eroig3 34 oij"), Date.now(), "Im ok . how are you?"));
  }
}