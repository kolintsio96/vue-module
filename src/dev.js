import { VueModule } from "./index";
import {v4} from "uuid";

import "./styles/index.css";

const app = new VueModule({
    id: v4()
});

app.mount("#app").init();