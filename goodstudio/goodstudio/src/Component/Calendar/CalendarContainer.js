import { connect } from "react-redux";
import { changeDate, setUrl } from '../../redux/calendarReducer';
import Calendar from "./Calendar";
const mapStateToProps = (state) => {
    return {
        date: state.calendarPage.date
    }
}
const CalendarContainer = connect(mapStateToProps, {changeDate, setUrl})(Calendar)
export default CalendarContainer