type Role="admin"|"user"|"moderator";

type BasicInfo={
    name:string;
    email:string;
};

type Permission={
    canEdit:boolean;
    canDelete:boolean;
};

type UserProfile= BasicInfo & Permission & {role:Role};

const userprofile:UserProfile={
    name:"Avinash",
    email:"as6005215206@gmail.com",
    canEdit:true,
    canDelete:true,
    role:"admin"
}
const anotherprofile:UserProfile={
    name:"Ankit",
    email:"ac6005215206@gmail.com",
    canEdit:true,
    canDelete:false,
    role:"user"
}