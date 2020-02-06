/**
 * Table value generator. (actually reversed.)
 * @param {int} n starting value
 * @param {int} x increment by
 * @param {int} m max
 * @param {boolean} ltr intial direction
 */
export function* tableValues(n, x, m, ltr) {
    let MAX_VALUES = 500; // prevents infinite loops with bad params.
    let i = 0;
    while(i < MAX_VALUES) {
        let values = [0, 1, 2, 3, 4].map(v => {
            return n + (x * (i + v));
        }).map(v => v > m ? null : v);
        i = i + 5;
        yield ltr ? values : [...values].reverse();
        ltr = !ltr;
        if (values.slice(-1)[0] == null) {
            return;
        }
    }
}
