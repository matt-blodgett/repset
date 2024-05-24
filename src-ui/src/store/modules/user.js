const state = {
  profile: {
    username: 'username',
    name: 'Matt B'
  },
  exercises: [
    {
      id: 1,
      name: 'Squat (Barbell)',
      muscle_group: 'legs'
    },
    {
      id: 2,
      name: 'Bench Press (Dumbell)',
      muscleGroup: 'chest'
    },
    {
      id: 3,
      name: 'Leg Extension (Machine)',
      muscleGroup: 'legs'
    },
    {
      id: 4,
      name: 'Lat Pulldown (Single Arm)',
      muscleGroup: 'back'
    },
    {
      id: 5,
      name: 'Bicep Curl (Machine)',
      muscleGroup: 'arms'
    },
    {
      id: 6,
      name: 'Deadlift (Barbell)',
      muscleGroup: 'back'
    },
    {
      id: 7,
      name: 'Incline Bench Press (Barbell)',
      muscleGroup: 'chest'
    },
    {
      id: 8,
      name: 'Crunch (Machine)',
      muscleGroup: 'core'
    },
    {
      id: 9,
      name: 'Triceps Pushdown (Cable - Straight Bar)',
      muscleGroup: 'arms'
    },
    {
      id: 10,
      name: 'Bicep Curl (Cable)',
      muscleGroup: 'arms'
    },
    {
      id: 11,
      name: 'Leg Press',
      muscleGroup: 'back'
    },
    {
      id: 12,
      name: 'Seated Leg Curl (Machine)',
      muscleGroup: 'legs'
    },
    {
      id: 13,
      name: 'Incline Chest Press (Machine)',
      muscleGroup: 'chest'
    },
    {
      id: 14,
      name: 'Lateral Raise (Dumbbell)',
      muscleGroup: 'shoulders'
    },
    {
      id: 15,
      name: 'Seated Row (Machine)',
      muscleGroup: 'back'
    },
    {
      id: 16,
      name: 'Chest Press (Dumbell)',
      muscleGroup: 'chest'
    },
    {
      id: 17,
      name: 'Bench Press (Barbell)',
      muscleGroup: 'back'
    },
    {
      id: 18,
      name: 'Seated Rows (Cable)',
      muscleGroup: 'back'
    },
    {
      id: 19,
      name: 'Pull Ups',
      muscleGroup: 'back'
    },
    {
      id: 20,
      name: 'Dips',
      muscleGroup: 'back'
    },
    {
      id: 21,
      name: 'Shoulder Press',
      muscleGroup: 'back'
    },
    {
      id: 22,
      name: 'Tricep Pushdowns',
      muscleGroup: 'back'
    },
    {
      id: 23,
      name: 'Bicep Curls',
      muscleGroup: 'back'
    },
    {
      id: 24,
      name: 'Chest Flys',
      muscleGroup: 'back'
    },
    {
      id: 25,
      name: 'Leg Extensions',
      muscleGroup: 'back'
    },
    {
      id: 26,
      name: 'Leg Curls',
      muscleGroup: 'back'
    }
  ],
  workoutTemplates: [
    {
      "id": 1,
      "name": "Day 1",
      "exercises": [
        {
          "id": 1,
          "exercise": {
            "id": 1,
            "name": "Squat (Barbell)",
            "muscle_group": "legs"
          },
          "sets": [
            {
              "id": 1,
              "set_number": 1,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            },
            {
              "id": 2,
              "set_number": 2,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            },
            {
              "id": 3,
              "set_number": 3,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            }
          ]
        },
        {
          "id": 2,
          "exercise": {
            "id": 2,
            "name": "Bench Press (Dumbell)",
            "muscle_group": "chest"
          },
          "sets": [
            {
              "id": 4,
              "set_number": 1,
              "weight": 115,
              "reps": 12,
              "rpe": 8.5
            },
            {
              "id": 5,
              "set_number": 2,
              "weight": 115,
              "reps": 12,
              "rpe": 8.5
            },
            {
              "id": 6,
              "set_number": 3,
              "weight": 115,
              "reps": 12,
              "rpe": 8.5
            }
          ]
        },
        {
          "id": 3,
          "exercise": {
            "id": 3,
            "name": "Leg Extension (Machine)",
            "muscle_group": "legs"
          },
          "sets": [
            {
              "id": 7,
              "set_number": 1,
              "weight": 110,
              "reps": 15,
              "rpe": 8.5
            },
            {
              "id": 8,
              "set_number": 2,
              "weight": 110,
              "reps": 15,
              "rpe": 8.5
            },
            {
              "id": 9,
              "set_number": 3,
              "weight": 110,
              "reps": 15,
              "rpe": 8.5
            }
          ]
        },
        {
          "id": 4,
          "exercise": {
            "id": 4,
            "name": "Lat Pulldown (Single Arm)",
            "muscle_group": "back"
          },
          "sets": [
            {
              "id": 10,
              "set_number": 1,
              "weight": 210,
              "reps": 6,
              "rpe": 8.5
            },
            {
              "id": 11,
              "set_number": 2,
              "weight": 210,
              "reps": 6,
              "rpe": 8.5
            },
            {
              "id": 12,
              "set_number": 3,
              "weight": 210,
              "reps": 6,
              "rpe": 8.5
            }
          ]
        },
        {
          "id": 5,
          "exercise": {
            "id": 5,
            "name": "Bicep Curl (Machine)",
            "muscle_group": "arms"
          },
          "sets": [
            {
              "id": 13,
              "set_number": 1,
              "weight": 85,
              "reps": 12,
              "rpe": 8.5
            },
            {
              "id": 14,
              "set_number": 2,
              "weight": 85,
              "reps": 12,
              "rpe": 8.5
            },
            {
              "id": 15,
              "set_number": 3,
              "weight": 85,
              "reps": 12,
              "rpe": 8.5
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "name": "Day 2",
      "exercises": [
        {
          "id": 6,
          "exercise": {
            "id": 6,
            "name": "Deadlift (Barbell)",
            "muscle_group": "back"
          },
          "sets": [
            {
              "id": 16,
              "set_number": 1,
              "weight": 90,
              "reps": 13,
              "rpe": 8.5
            },
            {
              "id": 17,
              "set_number": 2,
              "weight": 90,
              "reps": 13,
              "rpe": 8.5
            },
            {
              "id": 18,
              "set_number": 3,
              "weight": 90,
              "reps": 13,
              "rpe": 8.5
            }
          ]
        },
        {
          "id": 7,
          "exercise": {
            "id": 7,
            "name": "Incline Bench Press (Barbell)",
            "muscle_group": "chest"
          },
          "sets": [
            {
              "id": 19,
              "set_number": 1,
              "weight": 95,
              "reps": 13,
              "rpe": 8.5
            },
            {
              "id": 20,
              "set_number": 2,
              "weight": 95,
              "reps": 13,
              "rpe": 8.5
            },
            {
              "id": 21,
              "set_number": 3,
              "weight": 95,
              "reps": 13,
              "rpe": 8.5
            }
          ]
        },
        {
          "id": 8,
          "exercise": {
            "id": 8,
            "name": "Crunch (Machine)",
            "muscle_group": "core"
          },
          "sets": [
            {
              "id": 22,
              "set_number": 1,
              "weight": 195,
              "reps": 13,
              "rpe": 8.5
            },
            {
              "id": 23,
              "set_number": 2,
              "weight": 195,
              "reps": 13,
              "rpe": 8.5
            },
            {
              "id": 24,
              "set_number": 3,
              "weight": 195,
              "reps": 13,
              "rpe": 8.5
            }
          ]
        },
        {
          "id": 9,
          "exercise": {
            "id": 9,
            "name": "Triceps Pushdown (Cable - Straight Bar)",
            "muscle_group": "arms"
          },
          "sets": [
            {
              "id": 25,
              "set_number": 1,
              "weight": 65,
              "reps": 15,
              "rpe": 8.5
            },
            {
              "id": 26,
              "set_number": 2,
              "weight": 65,
              "reps": 15,
              "rpe": 8.5
            },
            {
              "id": 27,
              "set_number": 3,
              "weight": 65,
              "reps": 15,
              "rpe": 8.5
            }
          ]
        },
        {
          "id": 10,
          "exercise": {
            "id": 10,
            "name": "Bicep Curl (Cable)",
            "muscle_group": "arms"
          },
          "sets": [
            {
              "id": 28,
              "set_number": 1,
              "weight": 200,
              "reps": 7,
              "rpe": 8.5
            },
            {
              "id": 29,
              "set_number": 2,
              "weight": 200,
              "reps": 7,
              "rpe": 8.5
            },
            {
              "id": 30,
              "set_number": 3,
              "weight": 200,
              "reps": 7,
              "rpe": 8.5
            }
          ]
        },
        {
          "id": 11,
          "exercise": {
            "id": 11,
            "name": "Leg Press",
            "muscle_group": "back"
          },
          "sets": [
            {
              "id": 31,
              "set_number": 1,
              "weight": 215,
              "reps": 8,
              "rpe": 8.5
            },
            {
              "id": 32,
              "set_number": 2,
              "weight": 215,
              "reps": 8,
              "rpe": 8.5
            },
            {
              "id": 33,
              "set_number": 3,
              "weight": 215,
              "reps": 8,
              "rpe": 8.5
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "name": "Day 3",
      "exercises": [
        {
          "id": 12,
          "exercise": {
            "id": 12,
            "name": "Seated Leg Curl (Machine)",
            "muscle_group": "legs"
          },
          "sets": [
            {
              "id": 34,
              "set_number": 1,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            },
            {
              "id": 35,
              "set_number": 2,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            },
            {
              "id": 36,
              "set_number": 3,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            }
          ]
        },
        {
          "id": 13,
          "exercise": {
            "id": 13,
            "name": "Incline Chest Press (Machine)",
            "muscle_group": "chest"
          },
          "sets": [
            {
              "id": 37,
              "set_number": 1,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            },
            {
              "id": 38,
              "set_number": 2,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            },
            {
              "id": 39,
              "set_number": 3,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            }
          ]
        },
        {
          "id": 14,
          "exercise": {
            "id": 14,
            "name": "Lateral Raise (Dumbbell)",
            "muscle_group": "shoulders"
          },
          "sets": [
            {
              "id": 40,
              "set_number": 1,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            },
            {
              "id": 41,
              "set_number": 2,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            },
            {
              "id": 42,
              "set_number": 3,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            }
          ]
        },
        {
          "id": 15,
          "exercise": {
            "id": 1,
            "name": "Squat (Barbell)",
            "muscle_group": "legs"
          },
          "sets": [
            {
              "id": 43,
              "set_number": 1,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            },
            {
              "id": 44,
              "set_number": 2,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            },
            {
              "id": 45,
              "set_number": 3,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            }
          ]
        },
        {
          "id": 16,
          "exercise": {
            "id": 2,
            "name": "Bench Press (Dumbell)",
            "muscle_group": "chest"
          },
          "sets": [
            {
              "id": 46,
              "set_number": 1,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            },
            {
              "id": 47,
              "set_number": 2,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            },
            {
              "id": 48,
              "set_number": 3,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            }
          ]
        }
      ]
    },
    {
      "id": 4,
      "name": "Day 4",
      "exercises": [
        {
          "id": 17,
          "exercise": {
            "id": 3,
            "name": "Leg Extension (Machine)",
            "muscle_group": "legs"
          },
          "sets": [
            {
              "id": 49,
              "set_number": 1,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            },
            {
              "id": 50,
              "set_number": 2,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            },
            {
              "id": 51,
              "set_number": 3,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            }
          ]
        },
        {
          "id": 18,
          "exercise": {
            "id": 4,
            "name": "Lat Pulldown (Single Arm)",
            "muscle_group": "back"
          },
          "sets": [
            {
              "id": 52,
              "set_number": 1,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            },
            {
              "id": 53,
              "set_number": 2,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            },
            {
              "id": 54,
              "set_number": 3,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            }
          ]
        },
        {
          "id": 19,
          "exercise": {
            "id": 5,
            "name": "Bicep Curl (Machine)",
            "muscle_group": "arms"
          },
          "sets": [
            {
              "id": 55,
              "set_number": 1,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            },
            {
              "id": 56,
              "set_number": 2,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            },
            {
              "id": 57,
              "set_number": 3,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            }
          ]
        },
        {
          "id": 20,
          "exercise": {
            "id": 6,
            "name": "Deadlift (Barbell)",
            "muscle_group": "back"
          },
          "sets": [
            {
              "id": 58,
              "set_number": 1,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            },
            {
              "id": 59,
              "set_number": 2,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            },
            {
              "id": 60,
              "set_number": 3,
              "weight": 235,
              "reps": 8,
              "rpe": 8.5
            }
          ]
        }
      ]
    }
  ],
  folders: [
    {
      id: 1,
      name: 'Folder 1',
      workoutTemplateIds: [0, 1]
    },
    {
      id: 2,
      name: 'Folder 2',
      workoutTemplateIds: [1]
    },
    {
      id: 3,
      name: 'Folder 3',
      workoutTemplateIds: [0, 1, 2, 3, 4, 5, 6, 7]
    }
  ]
}

const getters = {
  getExercise: (state) => (id) => {
    return state.exercises.find((e) => e.id === id)
  },
  getWorkoutTemplate: (state) => (id) => {
    return state.workoutTemplates.find((e) => e.id === id)
  },
  getFolder: (state) => (id) => {
    return state.folders.find((e) => e.id === id)
  }
}

const mutations = {
  deleteWorkoutTemplate (state, id) {
    let delIndex = -1
    for (let i = 0; i < state.workoutTemplates.length; i++) {
      if (state.workoutTemplates[i].id == workoutTemplate.id) {
        delIndex = i
        break
      }
    }
    if (delIndex >= 0) {
      this.workoutTemplates.splice(delIndex, 1)
    }
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
