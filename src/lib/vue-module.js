import {createApp} from "vue";
import { createPinia } from "pinia"
import App from "@/App.vue"
import router from "@/router"

export default class VueModule {
    static #_activeIds = [];
    #_config;
    #_vue;
    #_initalized = false;

    constructor(config) {
        this.#_config = config;
        if(VueModule.#_activeIds.includes(this.#_config.id)) {
            throw new Error(`${this.#_config.id} is already active`);
        }

        this.#_vue = createApp(App);
        this.#_vue.use(createPinia());
        this.#_vue.use(router);
        this.#_vue.provide("id", this.#_config.id);

        VueModule.#_activeIds.push(this.#_config.id)
    }

    /**
     * Get unique id for the instance
     */
    get id() {
        return this.#_config.id;
    }

    /**
     * Mount the VueModule application
     * @param rootContainer DOM selector used to mount the initial Vue instance
     * @return {VueModule} this
     */
    mount(rootContainer) {
        this.#_vue.mount(rootContainer);
        return this;
    }

    async init() {
        if(this.#_initalized) {
            return;
        }

        /**
         * Config store
         */

        this.#_initalized = true;
    }
};
export class VueModuleClass {
    static #_activeIds = [];
    #_config;
    #_vue;
    #_initalized = false;

    constructor(config) {
        this.#_config = config;
        if(VueModule.#_activeIds.includes(this.#_config.id)) {
            throw new Error(`${this.#_config.id} is already active`);
        }

        this.#_vue = createApp(App);
        this.#_vue.use(createPinia());
        this.#_vue.use(router);
        this.#_vue.provide("id", this.#_config.id);

        VueModule.#_activeIds.push(this.#_config.id)
    }

    /**
     * Get unique id for the instance
     */
    get id() {
        return this.#_config.id;
    }

    /**
     * Mount the VueModule application
     * @param rootContainer DOM selector used to mount the initial Vue instance
     * @return {VueModule} this
     */
    mount(rootContainer) {
        this.#_vue.mount(rootContainer);
        return this;
    }

    async init() {
        if(this.#_initalized) {
            return;
        }

        /**
         * Config store
         */

        this.#_initalized = true;
    }
};