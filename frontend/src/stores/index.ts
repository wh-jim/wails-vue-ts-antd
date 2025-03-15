import { createPinia } from "pinia"
import { useCounterStore } from "./counter"

const pinia = createPinia()

const counterStore = useCounterStore(pinia)

export { pinia, counterStore }