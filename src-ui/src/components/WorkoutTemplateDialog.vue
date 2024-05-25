<template>
  <v-dialog v-bind="$attrs">

    <v-sheet class="workout-template-dialog rounded-lg pa-3">

      <v-sheet>

        <v-row no-gutters>
          <v-col cols="auto">
            <v-icon icon="mdi-pencil-outline" />
          </v-col>
          <v-spacer />
          <v-col cols="auto">
            <div id="title">{{ workoutTemplate.name }}</div>
          </v-col>
          <v-spacer />
          <v-col cols="auto">
            <v-icon icon="mdi-close" @click="$emit('update:modelValue', false)" />
          </v-col>
        </v-row>

        <div id="date" class="mt-2">Last Performed: 2 days ago</div>

        <v-list>
          <v-list-item v-for="(item, index) in exerciseDetails" :key="index">
            <template v-slot:prepend>
              <v-icon :icon="item.icon" />
            </template>
            <v-list-item-title>{{ `${item.set_count} x ${item.name}` }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.muscle_group }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>

        <v-btn
          color="primary"
          class="text-none"
          text="Start Workout"
          block
          density="comfortable"
          @click="$emit('click-start')"
        />

      </v-sheet>

    </v-sheet>

  </v-dialog>
</template>

<script>
export default {
  props: {
    workoutTemplate: {
      type: [Object, null],
      required: true
    }
  },
  data () {
    return {
    }
  },
  computed: {
    exerciseDetails () {
      const details = []
      this.workoutTemplate.exercises.forEach((item) => {
        const exercise = item.exercise
        details.push({
          icon: 'mdi-help-circle-outline',
          name: exercise.name,
          muscle_group: exercise.muscle_group,
          set_count: item.sets.length
        })
      })
      return details
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped>
.workout-template-dialog {
  #title {
    font-weight: bold;
    font-size: default;
  }
  #date {
    font-weight: 500;
    font-size: small;
    color: rgb(107, 107, 107);
  }
}

/* .v-list {
  background-color: rgb(63, 63, 63) !important;
} */
.v-list-item-title {
  font-size: small;
  font-weight: bold;
  color: #000000;
}
.v-list-item-subtitle {
  font-size: default;
  font-weight: 400;
  color: #333333;
}
.v-list-item :deep(.v-list-item__prepend .v-list-item__spacer) {
  width: 15px;
}
.v-list-item :deep(.v-list-item__content) {
  margin-right: 0px;
}
</style>
