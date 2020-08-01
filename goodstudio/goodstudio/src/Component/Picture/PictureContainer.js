import { connect } from "react-redux";
import { setPicture} from '../../redux/pictureReducer';
import PictureAPIComponent from './PictureAPIComponent';
const mapStateToProps = (state) => {
    return {
        urlImg: state.picturePage.urlImg,
        url: state.calendarPage.url
    }
}
const PictureContainer = connect(mapStateToProps, {setPicture})(PictureAPIComponent);
export default PictureContainer