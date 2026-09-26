

export function isString(value:unknown): value is string{
    if(typeof value === "string"){
        return true;
    }
    return false;
}

export function isNumber(value:unknown): value is number{
    if(typeof value === "number"){
        return true;
    }
    return false;
}

export function isValidAnswer(value:unknown): value is string{
    if(isString(value)){
        if(value.trim()!==""){
            return true;
        }
        return false;
    }
    return false;
}

export function getValueType(value:unknown): "string"|"number"|"boolean"|"other"{
    if(typeof value==="string"){
        return "string";
    }
    else if(typeof value === "number"){
        return "number";
    }
    else if(typeof value === "boolean"){
        return "boolean";
    }
    else{
        return "other";
    }
}

export function isPositiveNumber(value:unknown):boolean{
    if(isNumber(value)){
        if(value>0){
         return true;
        }
    }
    return false;
}

export function formatValue(
  value: string | number | boolean
): string {
  if (typeof value === "string") {
    return `Text: ${value}`;
  } else if (typeof value === "number") {
    return `Number: ${value}`;
  } else {
    return `Boolean: ${value}`;
  }
}