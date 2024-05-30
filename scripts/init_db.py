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
            created_at DATETIME NOT NULL,
            updated_at DATETIME NOT NULL,
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
            created_at DATETIME NOT NULL,
            updated_at DATETIME NOT NULL,

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
            created_at DATETIME NOT NULL,
            updated_at DATETIME NOT NULL,

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
            created_at DATETIME NOT NULL,
            updated_at DATETIME NOT NULL,

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
            created_at DATETIME NOT NULL,
            updated_at DATETIME NOT NULL,

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
    INSERT INTO exercises (name, muscle_group, created_at, updated_at)
    VALUES (?, ?, datetime('now'), datetime('now'))
    """

    params = [[exercise['name'], exercise['muscle_group']] for exercise in exercises]

    cursor.executemany(sql, params)

    connection.commit()
    connection.close()


def main():
    init_database_schema()
    init_database_data()


if __name__ == '__main__':
    main()
