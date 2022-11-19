import {GameView} from "./GameView";
import {ChatView} from "./ChatView";
import {FeedView} from "./FeedView";

export class ChainView {
  public game:GameView = new GameView();
  public chat:ChatView = new ChatView();
  public feed:FeedView = new FeedView();
}