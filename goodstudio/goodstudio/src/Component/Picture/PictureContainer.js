import { connect } from "react-redux";
import { setPicture } from '../../redux/pictureReducer';
import PictureAPIComponent from './PictureAPIComponent';
const mapStateToProps = (state) => {
    return {
        url: state.picturePage.url,
        date: state.calendarPage.date,
        // dateIsChanged: state.calendarPage.dateIsChanged
    }
}
const PictureContainer = connect(mapStateToProps, {setPicture})(PictureAPIComponent);
export default PictureContainer