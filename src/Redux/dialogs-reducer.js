const UPDATE_NEW_MESSAGES_BODY = "UPDATE-NEW-MESSAGES-BODY";
const SEND_MESSAGES = "SEND-MESSAGES";
let initialState = {
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your it-kamasutra" },
    { id: 3, message: "You" },
    { id: 4, message: "You" },
    { id: 5, message: "You" },
    { id: 6, message: "You" },
  ],
  dialogs: [
    { id: 1, name: "dime" },
    { id: 2, name: "Andre" },
    { id: 3, name: "Seta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Victor" },
    { id: 6, name: "Valera" },
  ],
  newMessageBody: "",
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGES_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    case SEND_MESSAGES:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        message: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  }
};
export const sendMessageCreator = () => ({ type: "SEND_MESSAGES" });
export const UpdateNewMessageBodyCreator = (text) => ({
  type: "UPDATE_NEW_POST_TEXT",
  newText: text,
});

export default dialogsReducer;
