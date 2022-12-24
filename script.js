import { TrafficLightView } from "./class/TrafficLightView.js"

let traficLight = new TrafficLightView(
    document.querySelector('.js-traffic-light'),
    new Map([
        ['go', 3000],
        ['prepare', 1000],
        ['stop', 2000]
    ])
)

traficLight.on()

