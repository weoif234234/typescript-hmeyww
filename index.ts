import { ViewTest } from "./Game/Test/ViewTest";
import {ChainView} from "./Game/View/ChainView";
(window as any).chain = new ChainView();

new ViewTest().Run();



