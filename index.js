class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
    this.deleteTime = null;
    this.refs = {
      fieldDays: this.selector.querySelector('span[data-value="days"]'),
      fieldHours: this.selector.querySelector('span[data-value="hours"]'),
      fieldMinutes: this.selector.querySelector('span[data-value="minutes"]'),
      fieldSeconds: this.selector.querySelector('span[data-value="seconds"]')
    };
    this.updateTimer();
  }
  updateTimer() {
    this.timerId = setInterval(() => {
      const startTime = Date.now();
      this.deltaTime = this.targetDate.getTime() - Date.now();
      const hours = String(Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
      const days = String(Math.floor(this.deltaTime / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const minutes = String(Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
      const seconds = String(Math.floor((this.deltaTime % (1000 * 60)) / 1000)).padStart(2, "0");
      this.updateView({ days, hours, minutes, seconds });
    }, 1000);
  }
  updateView({days, hours, minutes, seconds}) {
    this.refs.fieldDays.textContent = days;
      this.refs.fieldHours.textContent = hours;
      this.refs.fieldMinutes.textContent = minutes;
      this.refs.fieldSeconds.textContent = seconds;
  }
}
new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2021")
});