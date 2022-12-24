import { TrafficLightGenerator } from "./TrafficLightGenerator.js"

export class TrafficLightView {
    constructor(nodeConteiner, signals) {
        this.trafficLightGenerator = new TrafficLightGenerator(signals)
        signals.forEach((value, key) => {
			this.signalList.push({
				name: key,
				node: nodeConteiner.querySelector(`[data-signal="${key}"]`)
			})
		})
    }

    signalList = []
    signal = 'prepare'

    update(signal) {
        this.signal = this.signalList[signal].name
        this.signalList.forEach(el => {
            el.node.classList.remove('active')
            if(el.name == this.signal) {
                el.node.classList.add('active')
            }
        })
    }

    on() {
        this.trafficLightGenerator.subscribe(this)
        this.trafficLightGenerator.on()
    }

    of() {
        this.trafficLightGenerator.off()
    }
}