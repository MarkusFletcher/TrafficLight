import { TrafficLightView } from "./class/TrafficLightView.js"

let traficLight = new TrafficLightView(
    new Map([
        ['go', 6000],
        ['prepare', 2000],
        ['stop', 4000]
    ])
)

traficLight.on()

