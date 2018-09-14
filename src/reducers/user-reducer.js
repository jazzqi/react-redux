export default function userReducer(state = "", { type, payload }) {
  switch (type) {
    case "updateUser":
      return payload;
    default:
      break;
  }
  return state;
}
