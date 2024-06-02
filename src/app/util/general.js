import { isEmpty, isNil, not } from "ramda";

export const isBlank = val => isEmpty(val) || isNil(val) || val === undefined;
export const notBlank = val => not(isBlank(val));
