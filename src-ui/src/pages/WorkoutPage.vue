<template>
  <v-sheet>
    <WorkoutTemplatesPanel v-if="!$store.state.workoutSession.isActive" />
    <WorkoutSessionPanel v-if="$store.state.workoutSession.isActive" />
  </v-sheet>
</template>

<script>
import WorkoutTemplatesPanel from '@/components/WorkoutTemplatesPanel'
import WorkoutSessionPanel from '@/components/WorkoutSessionPanel'

export default {
  components: {
    WorkoutTemplatesPanel,
    WorkoutSessionPanel
  },
  props: {
  },
  emits: [
  ],
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
