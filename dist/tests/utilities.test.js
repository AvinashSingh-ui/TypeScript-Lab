import { getCompletedExercises } from "../utilities.js";

describe("getCompletedExercises", () => {
  test("returns only completed exercises", () => {
    // Arrange
    const exercises = [
      { id: 1, title: "Union Types", completed: true },
      { id: 2, title: "Enums", completed: false },
      { id: 3, title: "Type Guards", completed: true }
    ];

    // Act
    const result = getCompletedExercises(exercises);

    // Assert
    expect(result).toEqual([
      { id: 1, title: "Union Types", completed: true },
      { id: 3, title: "Type Guards", completed: true }
    ]);
  });

  test("returns an empty array when no exercises are completed", () => {
    const exercises = [
      { id: 1, completed: false },
      { id: 2, completed: false }
    ];

    expect(getCompletedExercises(exercises)).toEqual([]);
  });

  test("returns an empty array for empty input", () => {
    expect(getCompletedExercises([])).toEqual([]);
  });

  test("returns all exercises when all are completed", () => {
    const exercises = [
      { id: 1, completed: true },
      { id: 2, completed: true }
    ];

    expect(getCompletedExercises(exercises)).toEqual(exercises);
  });

  test("does not modify the original array", () => {
    const exercises = [
      { id: 1, completed: true },
      { id: 2, completed: false }
    ];

    const original = [...exercises];

    getCompletedExercises(exercises);

    expect(exercises).toEqual(original);
  });
});