export function isString(value) {
    if (typeof value === "string") {
        return true;
    }
    return false;
}
export function isNumber(value) {
    if (typeof value === "number") {
        return true;
    }
    return false;
}
export function isValidAnswer(value) {
    if (isString(value)) {
        if (value.trim() !== "") {
            return true;
        }
        return false;
    }
    return false;
}
export function getValueType(value) {
    if (typeof value === "string") {
        return "string";
    }
    else if (typeof value === "number") {
        return "number";
    }
    else if (typeof value === "boolean") {
        return "boolean";
    }
    else {
        return "other";
    }
}
export function isPositiveNumber(value) {
    if (isNumber(value)) {
        if (value > 0) {
            return true;
        }
    }
    return false;
}
export function formatValue(value) {
    if (typeof value === "string") {
        return `Text: ${value}`;
    }
    else if (typeof value === "number") {
        return `Number: ${value}`;
    }
    else {
        return `Boolean: ${value}`;
    }
}
