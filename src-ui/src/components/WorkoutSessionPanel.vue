<template>
  <v-sheet>

    <h2>{{ workoutSession.name }}</h2>

    <v-sheet v-for="(exercise, exerciseIndex) in workoutSession.exercises">

      <h3>{{ exercise.exercise.name }}</h3>

      <v-sheet>

        <v-row no-gutters class="mt-2 mb-1">
          <v-col cols="1">
            <div class="text-center font-weight-bold">Set</div>
          </v-col>
          <v-col cols="5">
            <div class="text-center font-weight-bold">Previous</div>
          </v-col>
          <v-spacer />
          <v-col cols="2">
            <div class="text-center font-weight-bold">lbs</div>
          </v-col>
          <v-spacer />
          <v-col cols="2">
            <div class="text-center font-weight-bold">Reps</div>
          </v-col>
          <v-spacer />
          <v-col cols="1">
            <v-icon
              :icon="isDeleteButtonsVisible ? 'mdi-toggle-switch' : 'mdi-toggle-switch-off'"
              @click="isDeleteButtonsVisible = !isDeleteButtonsVisible"
            />
          </v-col>
        </v-row>

        <v-row v-for="(set, setIndex) in exercise.sets" no-gutters class="mb-2">
          <v-col cols="1">
            <div class="text-center">{{ setIndex + 1 }}</div>
          </v-col>
          <v-col cols="5">
            <div class="text-center">{{ set.previous || 'No previous' }}</div>
          </v-col>
          <v-spacer />
          <v-col cols="2">
            <v-text-field v-model="set.weight" class="custom-text-field" hide-details />
          </v-col>
          <v-spacer />
          <v-col cols="2">
            <v-text-field v-model="set.reps" class="custom-text-field" hide-details />
          </v-col>
          <v-spacer />
          <v-col cols="1" class="px-1" v-if="!isDeleteButtonsVisible">
            <v-icon
              :color="set.complete ? 'green': ''"
              icon="mdi-check-bold"
              @click="toggleSetCompleted(exerciseIndex, setIndex)"
            />
          </v-col>
          <v-col cols="1" class="px-1" v-if="isDeleteButtonsVisible">
            <v-icon
              color="error"
              icon="mdi-delete"
              @click="removeSet(exerciseIndex, setIndex)"
            />
          </v-col>
        </v-row>

        <v-row no-gutters class="mt-2 mb-4">
          <v-col cols="12">
            <v-btn
              color="primary"
              class="text-none"
              block
              density="compact"
              text="Add Set"
              @click="addSet(exerciseIndex)"
            />
          </v-col>
        </v-row>

      </v-sheet>

    </v-sheet>

    <v-sheet>
      <v-row no-gutters class="my-4">
        <v-col cols="12">
          <v-btn
            color="primary"
            class="text-none"
            block
            density="compact"
            prepend-icon="mdi-plus"
            text="Add Exercises"
            @click="addExercises()"
          />
        </v-col>
      </v-row>
      <v-row no-gutters class="my-4">
        <v-col cols="12">
          <v-btn
            color="error"
            class="text-none"
            block
            density="compact"
            text="Cancel Workout"
            @click="cancelWorkout()"
          />
        </v-col>
      </v-row>
    </v-sheet>

    <ExerciseSelectorDialog
      v-model="isExerciseSelectorDialogVisible"
      @click-selected="onExercisesSelected"
    />

  </v-sheet>
</template>

<script>
import ExerciseSelectorDialog from '@/components/ExerciseSelectorDialog'

export default {
  components: {
    ExerciseSelectorDialog
  },
  props: {
  },
  emits: [
  ],
  data () {
    return {
      isExerciseSelectorDialogVisible: false,
      isDeleteButtonsVisible: false,
      workoutSession: {
        name: 'New Workout',
        exercises: []
      }
    }
  },
  computed: {
  },
  methods: {
    addSet (exerciseIndex) {
      this.workoutSession.exercises[exerciseIndex].sets.push(
        {
          weight: null,
          reps: null,
          rpe: null,
          complete: false
        }
      )
    },
    removeSet (exerciseIndex, setIndex) {
      if (this.workoutSession.exercises[exerciseIndex].sets.length === 1) {
        return
      }
      this.workoutSession.exercises[exerciseIndex].sets.splice(setIndex, 1)
    },
    toggleSetCompleted (exerciseIndex, setIndex) {
      this.workoutSession.exercises[exerciseIndex].sets[setIndex].complete = !this.workoutSession.exercises[exerciseIndex].sets[setIndex].complete
    },
    addExercises () {
      this.isExerciseSelectorDialogVisible = true
    },
    onExercisesSelected (data) {
      this.isExerciseSelectorDialogVisible = false

      data.forEach((exercise) => {
        const sets = []
        for (let i = 0; i < 3; i++) {
          sets.push({
            weight: null,
            reps: null,
            rpe: null,
            complete: false
          })
        }
        this.workoutSession.exercises.push({
          exercise: exercise,
          sets: sets
        })
      })
    },
    cancelWorkout () {
      this.$store.commit('workoutSession/cancel')
    }
  },
  mounted () {
    if (this.$store.state.workoutSession.selectedWorkoutTemplate) {
      this.workoutSession = JSON.parse(JSON.stringify(this.$store.state.workoutSession.selectedWorkoutTemplate))
    }
  }
}
</script>

<style scoped>
.custom-text-field
  :deep(.v-field__input) {
    padding: 1px;
    margin: 1px;
    min-height: 0px;
    text-align: center;
  }
</style>
