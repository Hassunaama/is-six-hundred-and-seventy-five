export function isSixHundredAndSeventyFive(x: number | string): boolean {
    switch (x) {
        case (675):
            return true;
        case ("six hundred and seventy five"):
            return true;
        default:
            return false;
    }
}