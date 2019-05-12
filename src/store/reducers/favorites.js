const INITIAL_STATE = [];

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [
        ...state,
        {
          id: Math.random(),
          name: "facebook/react",
          description:
            "jaisjdio ajsiodja iojdio ajsiod jioasj idoajsio djioasj idojasio",
          url: "http://google.com"
        }
      ];
    default:
      return state;
  }
}
