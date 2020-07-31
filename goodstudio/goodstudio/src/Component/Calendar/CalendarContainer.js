import { connect } from "react-redux";
import { changeDate } from '../../redux/calendarReducer';
import Calendar from "./Calendar";
const mapStateToProps = (state) => {
    return {
        date: state.calendarPage.date
    }
}
const CalendarContainer = connect(mapStateToProps, {changeDate})(Calendar)
export default CalendarContainer