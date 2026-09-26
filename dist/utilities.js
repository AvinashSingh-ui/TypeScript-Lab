export function getCompletedExercises(exercises) {
    return exercises.filter(exercise => exercise.completed);
}
