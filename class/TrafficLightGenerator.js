export class TrafficLightGenerator {
	constructor(signals) {
		signals.forEach((value, key) => {
			this.signalList.push({
				name: key,
				time: value
			})
		})
	}
	
	subscribers = []
	signalList = []
	activity = false
	signal = 1
	prev = 0
	
	changeSignal() {
		if (this.signal == 0 || (this.signal < this.signalList.length - 1 && this.signal > this.prev)) {
			this.prev = this.signal++
		} else {
			this.prev = this.signal--
		}
	}

	on() {
		this.activity = true
		this.loop()
	}

	off() {
		this.activity = false
	}

	loop() {
		this.changeSignal()
		this.subscribers.forEach(observer => {
			observer.update(this.signal)
		})
		if (this.activity) {
			// setTimeout(this.loop.bind(this), this.signalList[this.signal].time)
			setTimeout(() => this.loop(), this.signalList[this.signal].time)
		} else return
	}

	subscribe(observer) {
		this.subscribers.push(observer)
	}
}