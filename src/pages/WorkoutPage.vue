<template>
  <v-container class="px-2">
    <templates-panel v-if="!hasActiveWorkout" @quick-start="hasActiveWorkout = true" />
    <activity-panel v-if="hasActiveWorkout" />
  </v-container>
</template>

<script>
import TemplatesPanel from '@/components/TemplatesPanel'
import ActivityPanel from '@/components/ActivityPanel'

export default {
  components: {
    TemplatesPanel,
    ActivityPanel
  },
  props: {
  },
  emits: [
  ],
  data () {
    return {
      hasActiveWorkout: false
    }
  },
  computed: {
  },
  methods: {
  },
  mounted () {
    console.log('mounted')
  }
}
</script>

<style scoped>
</style>
