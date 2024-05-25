<template>
  <v-dialog v-bind="$attrs">

    <v-sheet class="rounded-lg pa-3">

      <v-sheet>
        <v-list selectable>
          <v-list-item v-for="(item, index) in exerciseOptions" :key="index" @click="item.selected = !item.selected">
            <template v-slot:prepend>
              <v-list-item-action start>
                <v-checkbox-btn v-model="item.selected" />
              </v-list-item-action>
            </template>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.muscle_group }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-sheet>

      <v-sheet>
        <v-btn
          color="primary"
          class="text-none"
          text="Ok"
          @click="$emit('click-selected', selectedOptions)"
        />
        <v-btn
          color="primary"
          class="text-none"
          text="Close"
          @click="$emit('update:modelValue', false)"
        />
      </v-sheet>

    </v-sheet>

  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      exerciseOptions: []
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
  },
  mounted () {
    this.$store.state.user.exercises.forEach((exercise) => {
      this.exerciseOptions.push({ ...exercise, selected: false })
    })
  }
}
</script>
