<template>
  <v-sheet>

    <h2 class="mb-4">Start a Workout</h2>

    <v-sheet>
      <div class="mb-2">Quick Start</div>
      <v-btn
        class="text-none"
        color="primary"
        block
        density="comfortable"
        text="Start an Empty Workout"
        @click="startWorkoutSession(null)"
      />
    </v-sheet>

    <v-sheet class="mt-10">
      <v-row no-gutters>
        <v-col cols="auto">
          <h3>Templates</h3>
        </v-col>
        <v-spacer />
        <v-col cols="auto">
          <v-btn
            color="primary"
            prepend-icon="mdi-plus"
            class="text-none"
            density="compact"
            text="Template"
            @click="createNewWorkoutTemplate()"
          />
        </v-col>
        <v-col cols="auto" class="mr-2 ml-4">
          <v-icon
            icon="mdi-folder-plus"
            @click="createNewFolder()"
          />
        </v-col>
      </v-row>
    </v-sheet>

    <v-sheet class="mt-5">
      <v-row no-gutters justify="space-around">
        <v-col cols="auto" v-for="(workoutTemplate, index) in $store.state.user.workoutTemplates" :key="index">
          <WorkoutTemplateCard
            class="ma-2"
            :workout-template="workoutTemplate"
            @click="openWorkoutTemplateDialog(workoutTemplate)"
            @click-edit="editWorkoutTemplate(workoutTemplate)"
            @click-delete="deleteWorkoutTemplate(workoutTemplate)"
          />
        </v-col>
      </v-row>
    </v-sheet>

    <!-- <v-sheet class="mt-4">
      <v-container class="pa-0">
        <v-row no-gutters>

          <v-col cols="8">
            <v-virtual-scroll :height="300" :items="templates">
              <template v-slot:default="{ item }">
                <template-card :template="item" />
              </template>
            </v-virtual-scroll>
          </v-col>
        </v-row>
    </v-container>
  </v-sheet> -->

    <!-- <v-sheet class="mt-4" v-for="folder in folders">
      <v-expansion-panels>
        <v-expansion-panel :title="folder.name">
          <v-expansion-panel-text>
            <v-row no-gutters>

            </v-row>
            <template-card :template="template" />
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-sheet> -->

    <WorkoutTemplateDialog
      v-model="workoutTemplateDialog.isVisible"
      :workout-template="workoutTemplateDialog.workoutTemplate"
      @click-start="startWorkoutSession(workoutTemplateDialog.workoutTemplate)"
    />

  </v-sheet>
</template>

<script>
import WorkoutTemplateDialog from '@/components/WorkoutTemplateDialog'
import WorkoutTemplateCard from '@/components/WorkoutTemplateCard'

export default {
  components: {
    WorkoutTemplateDialog,
    WorkoutTemplateCard
  },
  data () {
    return {
      workoutTemplateDialog: {
        isVisible: false,
        workoutTemplate: null
      }
    }
  },
  methods: {
    test () {
      console.log(this.$store)
    },
    createNewFolder () {
    },
    createNewWorkoutTemplate () {
    },
    openWorkoutTemplateDialog (workoutTemplate) {
      this.workoutTemplateDialog.workoutTemplate = workoutTemplate
      this.workoutTemplateDialog.isVisible = true
    },
    editWorkoutTemplate (workoutTemplate) {
      console.log(`edit template ${workoutTemplate.id}`)
    },
    deleteWorkoutTemplate (workoutTemplate) {
      this.$store.commit('user/deleteWorkoutTemplate', workoutTemplate.id)
    },
    startWorkoutSession (workoutTemplate) {
      this.workoutTemplateDialog.isVisible = false
      this.$store.commit('workoutSession/start', workoutTemplate)
    }
  }
}
</script>
