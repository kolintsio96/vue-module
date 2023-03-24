import { VueModule } from "./index";
import {v4} from "uuid";

const app = new VueModule({
    id: v4()
});

app.mount("#app").init();