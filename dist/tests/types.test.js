import { userprofile,anotherprofile } from "../types";

test("check the role of person",()=>{
    const act=userprofile.role;
    expect(act).toBe("admin");
});
test("check the role of person",()=>{
    const act=anotherprofile.role;
    expect(act).toBe("user");
});