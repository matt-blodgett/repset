import os
import sqlite3


PATH_DB = './repset.db'


def init_database_schema():
    if os.path.exists(PATH_DB):
        os.remove(PATH_DB)

    connection = sqlite3.connect(PATH_DB)
    cursor = connection.cursor()

    cursor.execute(
        """
        CREATE TABLE users (
            id INTEGER PRIMARY KEY,
            email NVARCHAR(255),
            password NVARCHAR(80) NOT NULL,
            name NVARCHAR(50) NOT NULL,
            UNIQUE(email)
        )
        """
    )

    cursor.execute(
        """
        CREATE TABLE exercises (
            id INTEGER PRIMARY KEY,
            user_id INTEGER,
            name NVARCHAR(50) NOT NULL,
            muscle_group NVARCHAR(50) NOT NULL,

            FOREIGN KEY (user_id)
                REFERENCES users (id)
                    ON UPDATE CASCADE
                    ON DELETE CASCADE
        )
        """
    )

    cursor.execute(
        """
        CREATE TABLE workout_templates (
            id INTEGER PRIMARY KEY,
            user_id INTEGER NOT NULL,
            name NVARCHAR(50) NOT NULL,

            FOREIGN KEY (user_id)
                REFERENCES users (id)
                    ON UPDATE CASCADE
                    ON DELETE CASCADE
        )
        """
    )

    cursor.execute(
        """
        CREATE TABLE workout_template_exercises (
            id INTEGER PRIMARY KEY,
            workout_template_id INTEGER NOT NULL,
            exercise_id INTEGER NOT NULL,

            FOREIGN KEY (workout_template_id)
                REFERENCES workout_templates (id)
                    ON UPDATE CASCADE
                    ON DELETE CASCADE

            FOREIGN KEY (exercise_id)
                REFERENCES exercises (id)
                    ON UPDATE CASCADE
                    ON DELETE CASCADE
        )
        """
    )

    cursor.execute(
        """
        CREATE TABLE workout_template_sets (
            id INTEGER PRIMARY KEY,
            workout_template_exercise_id INTEGER NOT NULL,
            set_number TINYINT NOT NULL,
            weight NUMERIC,
            reps NUMERIC,
            rpe NUMERIC,

            FOREIGN KEY (workout_template_exercise_id)
                REFERENCES workout_template_exercises (id)
                    ON UPDATE CASCADE
                    ON DELETE CASCADE
        )
        """
    )

    connection.commit()
    connection.close()


def init_database_data():
    connection = sqlite3.connect(PATH_DB)
    cursor = connection.cursor()

    exercises = [
        {
            'name': 'Squat (Barbell)',
            'muscle_group': 'legs'
        },
        {
            'name': 'Bench Press (Dumbell)',
            'muscle_group': 'chest'
        },
        {
            'name': 'Leg Extension (Machine)',
            'muscle_group': 'legs'
        },
        {
            'name': 'Lat Pulldown (Single Arm)',
            'muscle_group': 'back'
        },
        {
            'name': 'Bicep Curl (Machine)',
            'muscle_group': 'arms'
        },
        {
            'name': 'Deadlift (Barbell)',
            'muscle_group': 'back'
        },
        {
            'name': 'Incline Bench Press (Barbell)',
            'muscle_group': 'chest'
        },
        {
            'name': 'Crunch (Machine)',
            'muscle_group': 'core'
        },
        {
            'name': 'Triceps Pushdown (Cable - Straight Bar)',
            'muscle_group': 'arms'
        },
        {
            'name': 'Bicep Curl (Cable)',
            'muscle_group': 'arms'
        },
        {
            'name': 'Leg Press',
            'muscle_group': 'back'
        },
        {
            'name': 'Seated Leg Curl (Machine)',
            'muscle_group': 'legs'
        },
        {
            'name': 'Incline Chest Press (Machine)',
            'muscle_group': 'chest'
        },
        {
            'name': 'Lateral Raise (Dumbbell)',
            'muscle_group': 'shoulders'
        },
        {
            'name': 'Seated Row (Machine)',
            'muscle_group': 'back'
        },
        {
            'name': 'Chest Press (Dumbell)',
            'muscle_group': 'chest'
        },
        {
            'name': 'Bench Press (Barbell)',
            'muscle_group': 'back'
        },
        {
            'name': 'Seated Rows (Cable)',
            'muscle_group': 'back'
        },
        {
            'name': 'Pull Ups',
            'muscle_group': 'back'
        },
        {
            'name': 'Dips',
            'muscle_group': 'back'
        },
        {
            'name': 'Shoulder Press',
            'muscle_group': 'back'
        },
        {
            'name': 'Tricep Pushdowns',
            'muscle_group': 'back'
        },
        {
            'name': 'Bicep Curls',
            'muscle_group': 'back'
        },
        {
            'name': 'Chest Flys',
            'muscle_group': 'back'
        },
        {
            'name': 'Leg Extensions',
            'muscle_group': 'back'
        },
        {
            'name': 'Leg Curls',
            'muscle_group': 'back'
        }
    ]

    sql = """
    INSERT INTO exercises (name, muscle_group)
    VALUES (?, ?);
    """

    params = [[exercise['name'], exercise['muscle_group']] for exercise in exercises]

    cursor.executemany(sql, params)

    # sql_insert_workout_template = """
    # INSERT INTO workout_templates (id, name)
    # VALUES (?, ?);
    # """

    # sql_insert_workout_template_exercise = """
    # INSERT INTO workout_template_exercises (id, workout_template_id, exercise_id)
    # VALUES (?, ?, ?);
    # """

    # sql_insert_workout_template_set = """
    # INSERT INTO workout_template_sets (workout_template_exercise_id, set_number, weight, reps, rpe)
    # VALUES (?, ?, ?, ?, ?);
    # """

    # cursor.executemany(sql_insert_workout_template, [
    #     [1, 'Day 1'],
    #     [2, 'Day 2'],
    #     [3, 'Day 3'],
    #     [4, 'Day 4']
    # ])
    # cursor.executemany(sql_insert_workout_template_exercise, [
    #     [1, 1, 1],
    #     [2, 1, 2],
    #     [3, 1, 3],
    #     [4, 1, 4],
    #     [5, 1, 5],

    #     [6, 2, 6],
    #     [7, 2, 7],
    #     [8, 2, 8],
    #     [9, 2, 9],
    #     [10, 2, 10],
    #     [11, 2, 11],

    #     [12, 3, 12],
    #     [13, 3, 13],
    #     [14, 3, 14],
    #     [15, 3, 1],
    #     [16, 3, 2],

    #     [17, 4, 3],
    #     [18, 4, 4],
    #     [19, 4, 5],
    #     [20, 4, 6]
    # ])
    # cursor.executemany(sql_insert_workout_template_set, [
    #     [1, 1, 235, 8, 8.5],
    #     [1, 2, 235, 8, 8.5],
    #     [1, 3, 235, 8, 8.5],

    #     [2, 1, 115, 12, 8.5],
    #     [2, 2, 115, 12, 8.5],
    #     [2, 3, 115, 12, 8.5],

    #     [3, 1, 110, 15, 8.5],
    #     [3, 2, 110, 15, 8.5],
    #     [3, 3, 110, 15, 8.5],

    #     [4, 1, 210, 6, 8.5],
    #     [4, 2, 210, 6, 8.5],
    #     [4, 3, 210, 6, 8.5],

    #     [5, 1, 85, 12, 8.5],
    #     [5, 2, 85, 12, 8.5],
    #     [5, 3, 85, 12, 8.5],

    #     [6, 1, 90, 13, 8.5],
    #     [6, 2, 90, 13, 8.5],
    #     [6, 3, 90, 13, 8.5],

    #     [7, 1, 95, 13, 8.5],
    #     [7, 2, 95, 13, 8.5],
    #     [7, 3, 95, 13, 8.5],

    #     [8, 1, 195, 13, 8.5],
    #     [8, 2, 195, 13, 8.5],
    #     [8, 3, 195, 13, 8.5],

    #     [9, 1, 65, 15, 8.5],
    #     [9, 2, 65, 15, 8.5],
    #     [9, 3, 65, 15, 8.5],

    #     [10, 1, 200, 7, 8.5],
    #     [10, 2, 200, 7, 8.5],
    #     [10, 3, 200, 7, 8.5],

    #     [11, 1, 215, 8, 8.5],
    #     [11, 2, 215, 8, 8.5],
    #     [11, 3, 215, 8, 8.5],

    #     [12, 1, 235, 8, 8.5],
    #     [12, 2, 235, 8, 8.5],
    #     [12, 3, 235, 8, 8.5],

    #     [13, 1, 235, 8, 8.5],
    #     [13, 2, 235, 8, 8.5],
    #     [13, 3, 235, 8, 8.5],

    #     [14, 1, 235, 8, 8.5],
    #     [14, 2, 235, 8, 8.5],
    #     [14, 3, 235, 8, 8.5],

    #     [15, 1, 235, 8, 8.5],
    #     [15, 2, 235, 8, 8.5],
    #     [15, 3, 235, 8, 8.5],

    #     [16, 1, 235, 8, 8.5],
    #     [16, 2, 235, 8, 8.5],
    #     [16, 3, 235, 8, 8.5],

    #     [17, 1, 235, 8, 8.5],
    #     [17, 2, 235, 8, 8.5],
    #     [17, 3, 235, 8, 8.5],

    #     [18, 1, 235, 8, 8.5],
    #     [18, 2, 235, 8, 8.5],
    #     [18, 3, 235, 8, 8.5],

    #     [19, 1, 235, 8, 8.5],
    #     [19, 2, 235, 8, 8.5],
    #     [19, 3, 235, 8, 8.5],

    #     [20, 1, 235, 8, 8.5],
    #     [20, 2, 235, 8, 8.5],
    #     [20, 3, 235, 8, 8.5],
    # ])

    connection.commit()
    connection.close()


def main():
    init_database_schema()
    init_database_data()


if __name__ == '__main__':
    main()
