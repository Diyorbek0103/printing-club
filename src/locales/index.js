import { En } from "./En";
import { Ru } from "./Ru";
import { Uz } from "./Uz";

export function getText(word) {
    if (localStorage.getItem('language') === 'uz') {
        return Uz[word];
    }
    else if (localStorage.getItem('language') === 'ru') {
        return Ru[word];
    }
    else {
        return En[word]
    }
};