export type Exercise = {
  id: number;
  title: string;
  topic: string;
  difficulty: "Easy" | "Medium" | "Hard";
  completed: boolean;
};

export type ExercisePreview = Pick<
  Exercise,
  "id" | "title" | "topic"
>;

export type NewExercise = Omit<Exercise, "id">;

export type ExerciseUpdate = Partial<Exercise>;

export function getCompletedExercises(
  exercises: Exercise[]
): Exercise[] {
  return exercises.filter(exercise => exercise.completed);
}