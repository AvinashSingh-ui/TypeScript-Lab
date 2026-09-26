import { Difficulty } from "../enums.js";

test("check the difficulty level",()=>{
    expect(Difficulty["Easy"]).toBe("Easy");
});