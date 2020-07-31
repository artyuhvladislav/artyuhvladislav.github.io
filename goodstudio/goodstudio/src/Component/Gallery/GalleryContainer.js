import { connect } from "react-redux";
import Gallery from "./Gallery";
const mapStateToProps = (state) => {
    return {
        imgArray: state.picturePage.imgArray
    }
}
const GalleryContainer = connect(mapStateToProps, {})(Gallery);
export default GalleryContainer