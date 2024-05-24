<template>
  <v-sheet class="workout-template-card pl-2 pt-1">

    <v-row no-gutters>
      <v-col cols="10">
        <div class="workout-template-card-title">{{ workoutTemplateName }}</div>
      </v-col>
      <v-col cols="auto">
        <v-menu transition="slide-y-transition">
          <template v-slot:activator="{ props }">
            <v-icon
              v-bind="props"
              icon="mdi-dots-horizontal-circle-outline"
              size="medium"
              class="mt-n2"
            />
          </template>
          <v-list density="compact" class="pa-0" rounded="lg">
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              @click="$emit(item.eventName)"
              class="pa-2"
            >
              <template v-slot:prepend>
                <v-icon
                  :icon="item.icon"
                  :color="item.iconColor"
                  size="default"
                />
              </template>
              <v-list-item-title>{{ item.label }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>

    <v-row no-gutters class="mt-n1">
      <v-col cols="12">
        <div class="workout-template-card-preview">{{ workoutTemplateExerciseNames }}</div>
      </v-col>
    </v-row>

    <v-row no-gutters class="mt-1">
      <v-col cols="2">
        <v-icon icon="mdi-clock" size="medium" class="mt-n2" color="#888888" />
      </v-col>
      <v-col cols="auto">
        <div class="workout-template-card-date ml-n1">{{ workoutTemplateLastCompletedDate }}</div>
      </v-col>
    </v-row>

  </v-sheet>
</template>

<script>
export default {
  props: {
    workoutTemplate: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      items: [
        {
          label: 'Edit',
          icon: 'mdi-pencil-outline',
          iconColor: 'rgb(95, 252, 246)',
          eventName: 'click-edit'
        },
        {
          label: 'Delete',
          icon: 'mdi-close',
          iconColor: 'rgb(255, 59, 59)',
          eventName: 'click-delete'
        }
      ]
    }
  },
  computed: {
    workoutTemplateName () {
      return this.workoutTemplate.name
    },
    workoutTemplateExerciseNames () {
      let str = ''
      this.workoutTemplate.exercises.forEach((exercise) => {
        let name = this.$store.getters['user/getExercise'](exercise.exerciseId).name
        str += name + ', '
      })
      return str
    },
    workoutTemplateLastCompletedDate () {
      return '7 days ago'
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.workout-template-card {
  border: 1px solid rgb(205, 205, 205);
  border-radius: 10px;
  height: 95px;
  width: 41vw;
}
.workout-template-card-title {
  font-weight: bold;
  font-size: small;
}
.workout-template-card-preview {
  height: 45px;
  width: 37vw;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: x-small;
}
.workout-template-card-date {
  padding-top: 2px;
  padding-left: 1px;
  font-size: x-small;
}

.v-list {
  background-color: rgb(63, 63, 63) !important;
}
.v-list-item :deep(.v-list-item__prepend .v-list-item__spacer) {
  width: 10px;
}
.v-list-item :deep(.v-list-item__content) {
  margin-right: 20px;
}
.v-list-item-title {
  font-size: default;
  font-weight: normal;
  color: #ffffff;
}
</style>
