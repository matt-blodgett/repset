<template>
  <v-sheet class="fill-height">
    <WorkoutTemplatesPanel v-if="!$store.state.workoutSession.isActive" />
    <WorkoutSessionPanel v-if="$store.state.workoutSession.isActive" />
  </v-sheet>
</template>

<script>
import WorkoutTemplatesPanel from '@/components/WorkoutTemplatesPanel.vue'
import WorkoutSessionPanel from '@/components/WorkoutSessionPanel.vue'

export default {
  components: {
    WorkoutTemplatesPanel,
    WorkoutSessionPanel
  },
  props: {
  },
  emits: [
  ],
  data: () => ({

  }),
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
