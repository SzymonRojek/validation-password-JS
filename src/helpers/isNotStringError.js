export default function isNotStringError(password) {
  if (typeof password !== "string") {
    throw new Error("Given argument has to be a string!");
  }
}
