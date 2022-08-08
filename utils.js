/**
 * Helper function to join an array of strings with commas and a separator before the last item.
 * https://github.com/xmanemran/join-with-commas-and-and-before-the-last/blob/master/index.js
 * @param items The array of strings to join.
 * @param beforeLast the separator to use before the last item
 * @returns {*} The joined string.
 */
export const joinStrings = (items, beforeLast = "and") => {
  return items.length > 2
    ? items
        .join(", ")
        .split(" ")
        .map((value, index, arr) =>
          index === arr.length - 2 ? value.replace(",", ", " + beforeLast) : value
        )
        .join(" ")
    : beforeLast === ","
    ? items.join(beforeLast + " ")
    : items.join(" " + beforeLast + " ");
};
