import { TrafficLightGenerator } from "./TrafficLightGenerator.js"

export class TrafficLightView {
    constructor(signals) {
        this.trafficLightGenerator = new TrafficLightGenerator(signals)
    }

    on() {
        this.trafficLightGenerator.on()
    }
}