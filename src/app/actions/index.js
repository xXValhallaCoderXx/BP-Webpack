export const ActionTypes = {
  INCREASE: "INCREASE"
}

export function increaseCounter() {
  return {
    type: ActionTypes.INCREASE
  };
}
