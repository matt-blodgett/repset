import time
import json
import requests


URL_BASE = 'http://localhost:8000/api'


def print_response(response):
    print(response.status_code)

    try:
        print(json.dumps(response.json(), indent=2))
    except Exception:
        print(response.text)


def get_response(session, endpoint, method, ):
    print(f'{method.upper()}: /api/{endpoint}')
    return getattr(session, method)


def test_e2e():
    session = requests.Session()

    response = session.post(
        url=f'{URL_BASE}/signup',
        json={
            'name': 'Matt',
            'email': 'test@test.ca',
            'password': 'testpass'
        }
    )

    assert response.status_code == 201

    response = session.post(
        url=f'{URL_BASE}/auth',
        json={
            'email': 'test@test.ca',
            'password': 'testpass'
        }
    )

    assert response.status_code == 200
    assert response.json()['token']

    token = response.json()['token']
    session.headers['Authorization'] = f'Bearer {token}'

    response = session.get(
        url=f'{URL_BASE}/exercises'
    )

    assert len(response.json()) > 0

    workout_templates = [
        {
            "name": "Day 1",
            "exercises": [
                {
                    "exercise": {
                        "id": 1,
                        "name": "Squat (Barbell)",
                        "muscle_group": "legs"
                    },
                    "sets": [
                        {
                            "set_number": 1,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 2,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 3,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        }
                    ]
                },
                {
                    "exercise": {
                        "id": 2,
                        "name": "Bench Press (Dumbell)",
                        "muscle_group": "chest"
                    },
                    "sets": [
                        {
                            "set_number": 1,
                            "weight": 115,
                            "reps": 12,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 2,
                            "weight": 115,
                            "reps": 12,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 3,
                            "weight": 115,
                            "reps": 12,
                            "rpe": 8.5
                        }
                    ]
                },
                {
                    "exercise": {
                        "id": 3,
                        "name": "Leg Extension (Machine)",
                        "muscle_group": "legs"
                    },
                    "sets": [
                        {
                            "set_number": 1,
                            "weight": 110,
                            "reps": 15,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 2,
                            "weight": 110,
                            "reps": 15,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 3,
                            "weight": 110,
                            "reps": 15,
                            "rpe": 8.5
                        }
                    ]
                },
                {
                    "exercise": {
                        "id": 4,
                        "name": "Lat Pulldown (Single Arm)",
                        "muscle_group": "back"
                    },
                    "sets": [
                        {
                            "set_number": 1,
                            "weight": 210,
                            "reps": 6,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 2,
                            "weight": 210,
                            "reps": 6,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 3,
                            "weight": 210,
                            "reps": 6,
                            "rpe": 8.5
                        }
                    ]
                },
                {
                    "exercise": {
                        "id": 5,
                        "name": "Bicep Curl (Machine)",
                        "muscle_group": "arms"
                    },
                    "sets": [
                        {
                            "set_number": 1,
                            "weight": 85,
                            "reps": 12,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 2,
                            "weight": 85,
                            "reps": 12,
                            "rpe": 8.5
                        },
                        {
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
            "name": "Day 2",
            "exercises": [
                {
                    "exercise": {
                        "id": 6,
                        "name": "Deadlift (Barbell)",
                        "muscle_group": "back"
                    },
                    "sets": [
                        {
                            "set_number": 1,
                            "weight": 90,
                            "reps": 13,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 2,
                            "weight": 90,
                            "reps": 13,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 3,
                            "weight": 90,
                            "reps": 13,
                            "rpe": 8.5
                        }
                    ]
                },
                {
                    "exercise": {
                        "id": 7,
                        "name": "Incline Bench Press (Barbell)",
                        "muscle_group": "chest"
                    },
                    "sets": [
                        {
                            "set_number": 1,
                            "weight": 95,
                            "reps": 13,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 2,
                            "weight": 95,
                            "reps": 13,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 3,
                            "weight": 95,
                            "reps": 13,
                            "rpe": 8.5
                        }
                    ]
                },
                {
                    "exercise": {
                        "id": 8,
                        "name": "Crunch (Machine)",
                        "muscle_group": "core"
                    },
                    "sets": [
                        {
                            "set_number": 1,
                            "weight": 195,
                            "reps": 13,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 2,
                            "weight": 195,
                            "reps": 13,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 3,
                            "weight": 195,
                            "reps": 13,
                            "rpe": 8.5
                        }
                    ]
                },
                {
                    "exercise": {
                        "id": 9,
                        "name": "Triceps Pushdown (Cable - Straight Bar)",
                        "muscle_group": "arms"
                    },
                    "sets": [
                        {
                            "set_number": 1,
                            "weight": 65,
                            "reps": 15,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 2,
                            "weight": 65,
                            "reps": 15,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 3,
                            "weight": 65,
                            "reps": 15,
                            "rpe": 8.5
                        }
                    ]
                },
                {
                    "exercise": {
                        "id": 10,
                        "name": "Bicep Curl (Cable)",
                        "muscle_group": "arms"
                    },
                    "sets": [
                        {
                            "set_number": 1,
                            "weight": 200,
                            "reps": 7,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 2,
                            "weight": 200,
                            "reps": 7,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 3,
                            "weight": 200,
                            "reps": 7,
                            "rpe": 8.5
                        }
                    ]
                },
                {
                    "exercise": {
                        "id": 11,
                        "name": "Leg Press",
                        "muscle_group": "back"
                    },
                    "sets": [
                        {
                            "set_number": 1,
                            "weight": 215,
                            "reps": 8,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 2,
                            "weight": 215,
                            "reps": 8,
                            "rpe": 8.5
                        },
                        {
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
            "name": "Day 3",
            "exercises": [
                {
                    "exercise": {
                        "id": 12,
                        "name": "Seated Leg Curl (Machine)",
                        "muscle_group": "legs"
                    },
                    "sets": [
                        {
                            "set_number": 1,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 2,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 3,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        }
                    ]
                },
                {
                    "exercise": {
                        "id": 13,
                        "name": "Incline Chest Press (Machine)",
                        "muscle_group": "chest"
                    },
                    "sets": [
                        {
                            "set_number": 1,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 2,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 3,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        }
                    ]
                },
                {
                    "exercise": {
                        "id": 14,
                        "name": "Lateral Raise (Dumbbell)",
                        "muscle_group": "shoulders"
                    },
                    "sets": [
                        {
                            "set_number": 1,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 2,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 3,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        }
                    ]
                },
                {
                    "exercise": {
                        "id": 1,
                        "name": "Squat (Barbell)",
                        "muscle_group": "legs"
                    },
                    "sets": [
                        {
                            "set_number": 1,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 2,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 3,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        }
                    ]
                },
                {
                    "exercise": {
                        "id": 2,
                        "name": "Bench Press (Dumbell)",
                        "muscle_group": "chest"
                    },
                    "sets": [
                        {
                            "set_number": 1,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 2,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        },
                        {
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
            "name": "Day 4",
            "exercises": [
                {
                    "exercise": {
                        "id": 3,
                        "name": "Leg Extension (Machine)",
                        "muscle_group": "legs"
                    },
                    "sets": [
                        {
                            "set_number": 1,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 2,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 3,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        }
                    ]
                },
                {
                    "exercise": {
                        "id": 4,
                        "name": "Lat Pulldown (Single Arm)",
                        "muscle_group": "back"
                    },
                    "sets": [
                        {
                            "set_number": 1,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 2,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 3,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        }
                    ]
                },
                {
                    "exercise": {
                        "id": 5,
                        "name": "Bicep Curl (Machine)",
                        "muscle_group": "arms"
                    },
                    "sets": [
                        {
                            "set_number": 1,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 2,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 3,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        }
                    ]
                },
                {
                    "exercise": {
                        "id": 6,
                        "name": "Deadlift (Barbell)",
                        "muscle_group": "back"
                    },
                    "sets": [
                        {
                            "set_number": 1,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 2,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        },
                        {
                            "set_number": 3,
                            "weight": 235,
                            "reps": 8,
                            "rpe": 8.5
                        }
                    ]
                }
            ]
        }
    ]

    # for workout_template in workout_templates:
    #     response = session.post(
    #         url=f'{URL_BASE}/workout_templates',
    #         json=workout_template
    #     )

    #     assert response.status_code == 201


# response = requests.get(
#     url=f'{URL_BASE}/workout_templates',
#     headers={'Authorization': f'Bearer {token}'}
# )

# print_response(response)



if __name__ == '__main__':
    test_e2e()

