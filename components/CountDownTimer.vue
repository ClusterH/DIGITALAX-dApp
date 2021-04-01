<template>
  <span>{{ days }} : {{ hours }} : {{ minutes }} : {{ seconds }}</span>
</template>

<script>
import moment from 'moment'
export default {
  name: 'CountDownTimer',
  props: {
    endtime: {
      type: String,
      default: '00'
    }
  },
  data () {
    return {
      interval: '',
      days: '00',
      minutes: '00',
      hours: '00',
      seconds: '00'
    }
  },
  watch: {
    endtime (val) {
      this.startCount()
    }
  },
  mounted () {
    this.startCount()
  },
  methods: {
    startCount () {
      // Update the count down every 1 second
      this.timerCount()
      this.interval = setInterval(() => {
        this.timerCount()
      }, 1000)
    },
    timerCount (end) {
      if (moment().isAfter(this.endtime)) {
        this.days = '00'
        this.hours = '00'
        this.minutes = '00'
        this.seconds = '00'
        return
      }
      const duration = moment.duration(-moment().diff(this.endtime))
      this.days = this.leadingZero(Math.floor(duration.asDays()))
      this.hours = this.leadingZero(duration.hours())
      this.minutes = this.leadingZero(duration.minutes())
      this.seconds = this.leadingZero(duration.seconds() + 1)
    },
    leadingZero (number) {
      if (number < 10) { return '0' + number } else { return number }
    }
  }
}

</script>
