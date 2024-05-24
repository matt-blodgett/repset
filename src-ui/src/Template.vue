<template>
</template>

<script>
export default {
  components: {
  },
  props: {
    prop: {
      type: String,
      required: false,
      default: 'test',
      validator (value) {
        return ['test', 'test2'].includes(value)
      }
    }
  },
  emits: [
    'eventName'
  ],
  data () {
    return {
    }
  },
  computed: {
  },
  watch: {
    value (newValue, oldValue) {
      //
    }
  },
  methods: {
  },
  beforeCreate () {
  },
  created () {
  },
  beforeMount () {
  },
  mounted () {
  },
  beforeUpdate () {
  },
  updated () {
  },
  beforeUnmount () {
  },
  unmounted () {
  }
}
</script>

<style scoped>
</style>
