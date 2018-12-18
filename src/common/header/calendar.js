import BigCalendar from 'react-big-calendar'
import moment from 'moment'
 
const localizer = BigCalendar.momentLocalizer(moment) 
 

var myEventsList =[]
const MyCalendar = props => (
  <div>
    <BigCalendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
)

exports default MyCalendar;