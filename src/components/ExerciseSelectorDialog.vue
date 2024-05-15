<template>
  <v-dialog v-bind="$attrs">
    <!-- <v-container>
      <v-responsive
      class="align-centerfill-height mx-auto"
    > -->

    <v-sheet>

      <v-list selectable>
        <v-list-item v-for="item in exerciseOptions" @click="item.selected = !item.selected">
          <template v-slot:prepend>
            <v-list-item-action start>
              <v-checkbox-btn v-model="item.selected" />
            </v-list-item-action>
          </template>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.muscleGroup }}</v-list-item-subtitle>
        </v-list-item>
      </v-list>

    </v-sheet>

    <v-sheet>
      <v-btn text="ok" @click="$emit('selected', selectedOptions)" />
      <v-btn text="close" @click="$emit('update:modelValue', false)" />
    </v-sheet>

<!-- </v-responsive>
  </v-container> -->
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      exerciseOptions: [
        {
          name: 'Squat (Barbell)',
          muscleGroup: 'legs',
          selected: false
        },
        {
          name: 'Chest Press (Dumbell)',
          muscleGroup: 'chest',
          selected: false
        },
        {
          name: 'Bench Press (Barbell)',
          muscleGroup: 'back',
          selected: false
        },
        {
          name: 'Deadlift (Barbell)',
          muscleGroup: 'back',
          selected: false
        },
        {
          name: 'Seated Rows (Cable)',
          muscleGroup: 'back',
          selected: false
        },
        {
          name: 'Pull Ups',
          muscleGroup: 'back',
          selected: false
        },
        {
          name: 'Dips',
          muscleGroup: 'back',
          selected: false
        },
        {
          name: 'Shoulder Press',
          muscleGroup: 'back',
          selected: false
        },
        {
          name: 'Tricep Pushdowns',
          muscleGroup: 'back',
          selected: false
        },
        {
          name: 'Bicep Curls',
          muscleGroup: 'back',
          selected: false
        },
        {
          name: 'Chest Flys',
          muscleGroup: 'back',
          selected: false
        },
        {
          name: 'Leg Press',
          muscleGroup: 'back',
          selected: false
        },
        {
          name: 'Leg Extensions',
          muscleGroup: 'back',
          selected: false
        },
        {
          name: 'Leg Curls',
          muscleGroup: 'back',
          selected: false
        }
      ]
    }
  },
  computed: {
    selectedOptions () {
      return this.exerciseOptions.filter((opt) => opt.selected)
    }
  },
  methods: {
  },
  watch: {
    '$attrs.modelValue' (newValue, oldValue) {
      if (newValue) {
        for (let e of this.exerciseOptions) {
          e.selected = false
        }
      }
    }
  }
}
</script>
