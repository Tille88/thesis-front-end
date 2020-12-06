// min and max inclusive
export function randomInt(min, max, digits = 0) {
    return Math.floor(Math.random() * (max - min+1)+min);
}
