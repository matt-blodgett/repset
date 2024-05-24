const exercises = [
  {
    id: 1,
    name: 'Squat (Barbell)',
    muscleGroup: 'legs'
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
]


const workoutTemplates = [
  {
    id: 1,
    name: 'Day 1',
    exercises: [
      {
        exerciseId: 1,
        sets: [
          {
            previous: '225 lb x 8 @ 8.5',
            weight: 230,
            reps: 8,
            rpe: 8.5
          },
          {
            previous: '225 lb x 8 @ 9',
            weight: 230,
            reps: 8,
            rpe: 9
          },
          {
            previous: '225 lb x 8 @ 9.5',
            weight: 230,
            reps: 8,
            rpe: 9.5
          }
        ]
      },
      {
        exerciseId: 2,
        sets: [
          {
            previous: '60 lb x 9 @ 8.5',
            weight: 60,
            reps: 10,
            rpe: 8.5
          },
          {
            previous: '60 lb x 9 @ 9',
            weight: 60,
            reps: 10,
            rpe: 9
          },
          {
            previous: '60 lb x 9 @ 9.5',
            weight: 60,
            reps: 10,
            rpe: 9.5
          }
        ]
      },
      {
        exerciseId: 3,
        sets: [
          {
            previous: '130 lb x 12 @ 8',
            weight: 130,
            reps: 12,
            rpe: 8
          },
          {
            previous: '130 lb x 12 @ 8.5',
            weight: 130,
            reps: 12,
            rpe: 8.5
          },
          {
            previous: '130 lb x 12 @ 8.5',
            weight: 130,
            reps: 12,
            rpe: 8.5
          }
        ]
      },
      {
        exerciseId: 4,
        sets: [
          {
            previous: '120 lb x 12 @ 8',
            weight: 120,
            reps: 12,
            rpe: 8
          },
          {
            previous: '120 lb x 12 @ 8.5',
            weight: 120,
            reps: 12,
            rpe: 8.5
          },
          {
            previous: '120 lb x 12 @ 9.5',
            weight: 120,
            reps: 13,
            rpe: 9.5
          }
        ]
      },
      {
        exerciseId: 5,
        sets: [
          {
            previous: '105 lb x 11 @ 9',
            weight: 105,
            reps: 12,
            rpe: 9
          },
          {
            previous: '105 lb x 9 @ 9.5',
            weight: 105,
            reps: 10,
            rpe: 9.5
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Day 2',
    exercises: [
      {
        exerciseId: 6,
        sets: [
          {
            previous: '285 lb x 8 @ 7.5',
            weight: 290,
            reps: 8,
            rpe: 8
          },
          {
            previous: '285 lb x 8 @ 7.5',
            weight: 290,
            reps: 8,
            rpe: 8.5
          },
          {
            previous: '285 lb x 8 @ 8',
            weight: 290,
            reps: 8,
            rpe: 8.5
          },
        ]
      },
      {
        exerciseId: 7,
        sets: [
          {
            previous: '145 lb x 9 @ 8.5',
            weight: 145,
            reps: 8,
            rpe: 8
          },
          {
            previous: '145 lb x 9 @ 8.5',
            weight: 145,
            reps: 8,
            rpe: 8
          },
          {
            previous: '145 lb x 9 @ 8.5',
            weight: 145,
            reps: 8,
            rpe: 8
          }
        ]
      },
      {
        exerciseId: 8,
        sets: [
          {
            previous: '140 lb x 14 @ 7.5',
            weight: 145,
            reps: 12,
            rpe: 8
          },
          {
            previous: '140 lb x 14 @ 7.5',
            weight: 145,
            reps: 12,
            rpe: 8
          },
          {
            previous: '140 lb x 14 @ 7.5',
            weight: 145,
            reps: 12,
            rpe: 8
          }
        ]
      },
      {
        exerciseId: 9,
        sets: [
          {
            previous: '62.5 lb x 15 @ 8',
            weight: 62.5,
            reps: 15,
            rpe: 8
          },
          {
            previous: '62.5 lb x 15 @ 8',
            weight: 62.5,
            reps: 15,
            rpe: 8
          },
          {
            previous: '62.5 lb x 15 @ 8',
            weight: 62.5,
            reps: 15,
            rpe: 8
          }
        ]
      },
      {
        exerciseId: 10,
        sets: [
          {
            previous: '40 lb x 15 @ 7',
            weight: 45,
            reps: 15,
            rpe: 8
          },
          {
            previous: '40 lb x 15 @ 7',
            weight: 45,
            reps: 15,
            rpe: 8
          },
          {
            previous: '40 lb x 15 @ 7',
            weight: 45,
            reps: 15,
            rpe: 8
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Day 3',
    exercises: [
      {
        exerciseId: 11,
        sets: [
          {
            previous: '540 lb x 9 @ 8',
            weight: 540,
            reps: 9,
            rpe: 8
          },
          {
            previous: '540 lb x 9 @ 8',
            weight: 540,
            reps: 9,
            rpe: 8
          },
          {
            previous: '540 lb x 9 @ 8',
            weight: 540,
            reps: 9,
            rpe: 8
          }
        ]
      },
      {
        exerciseId: 12,
        sets: [
          {
            previous: '160 lb x 13 @ 8',
            weight: 160,
            reps: 13,
            rpe: 8
          },
          {
            previous: '160 lb x 13 @ 8',
            weight: 160,
            reps: 13,
            rpe: 8
          },
          {
            previous: '160 lb x 13 @ 8',
            weight: 160,
            reps: 13,
            rpe: 8
          }
        ]
      },
      {
        exerciseId: 13,
        sets: [
          {
            previous: '75 lb x 10 @ 8.5',
            weight: 75,
            reps: 10,
            rpe: 8
          },
          {
            previous: '75 lb x 10 @ 8.5',
            weight: 75,
            reps: 10,
            rpe: 8
          },
          {
            previous: '75 lb x 10 @ 8.5',
            weight: 75,
            reps: 10,
            rpe: 8
          }
        ]
      },
      {
        exerciseId: 14,
        sets: [
          {
            previous: '20 lb x 10 @ 8.5',
            weight: 20,
            reps: 10,
            rpe: 8
          },
          {
            previous: '20 lb x 10 @ 8.5',
            weight: 20,
            reps: 10,
            rpe: 8
          },
          {
            previous: '20 lb x 10 @ 8.5',
            weight: 20,
            reps: 10,
            rpe: 8
          }
        ]
      },
      {
        exerciseId: 15,
        sets: [
          {
            previous: '115 lb x 15 @ 7.5',
            weight: 120,
            reps: 12,
            rpe: 8
          },
          {
            previous: '115 lb x 15 @ 7.5',
            weight: 120,
            reps: 12,
            rpe: 8
          },
          {
            previous: '115 lb x 15 @ 7.5',
            weight: 120,
            reps: 12,
            rpe: 8
          }
        ]
      }
    ]
  }
]


const folders = [
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



const numTemplates = workoutTemplates.length
for (let i = numTemplates + 1; i < numTemplates + 6; i++) {
  let newTemplate = {...workoutTemplates[0]}
  newTemplate.id = i
  newTemplate.name = `Day ${i}`
  workoutTemplates.push(newTemplate)
}

function getExercise (id) {
  return exercises.find((e) => e.id === id)
}

function getWorkoutTemplate (id) {
  return workoutTemplates.find((e) => e.id === id)
}

function getFolder (id) {
  return folders.find((e) => e.id === id)
}

export {
  exercises,
  workoutTemplates,
  folders,
  getExercise,
  getWorkoutTemplate,
  getFolder
}
