export class TrafficLightGenerator {
	constructor(signals) {
		signals.forEach((value, key) => {
			this.signalList.push({
				name: key,
				time: value
			})
		})
	}
	signalList = []
	activity = false
	signal = 1
	prev = 0
	
	changeSignal() {
		if (this.signal == 0 || (this.signal < this.signalList.length - 1 && this.signal > this.prev)) {
			this.prev = this.signal
			this.signal++
			return
		} else {
			this.prev = this.signal
			this.signal--
			return
		}
	}

	on() {
		console.log(this.signalList)
		this.activity = true
		this.loop()
	}

	off() {
		this.activity = false
	}

	loop() {
		this.changeSignal()
		console.log(this.signalList[this.signal].name)
		if (this.activity) {
			// setTimeout(this.loop.bind(this), this.signalsList[this.signalKeys[this.Signal]])
			setTimeout(() => this.loop(), this.signalList[this.signal].time)
		} else return
	}
}