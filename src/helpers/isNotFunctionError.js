export default function isNotFunctionError(callback) {
  if (typeof callback !== "function") {
    throw new Error("Argument has to be a function!");
  }
}
