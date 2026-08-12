import { useStore } from "~/store/store";

export default defineNuxtPlugin(() => {
    return{
        provide: {
            useStore
        }
    }
})