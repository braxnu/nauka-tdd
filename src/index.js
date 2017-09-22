var signal = {
  red: true,
  yellow: false,
  green: false,

  turn: function () {
    if (this.red) {
      this.red = false
      this.yellow = true

      return
    }

    if (this.yellow) {
      this.yellow = false
      this.green = true

      return
    }

    if (this.green) {
      this.green = false
      this.red = true
    }
  }
}

module.exports = signal
