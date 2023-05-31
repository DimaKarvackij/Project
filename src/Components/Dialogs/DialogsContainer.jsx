
import { sendMessageCreator, UpdateNewMessageBodyCreator } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";




const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
const mapDispatchToProps = (dispatch) => {
   return {
    sendMessage: () => {
      dispatch(sendMessageCreator())
    },
    UpdateNewMessageBody: (body) => {
      dispatch(UpdateNewMessageBodyCreator)
    }
  }
}



const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;
