import Card from "../components/card/Card";
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { MOCK_EVENTS } from "../data/event";
const localizer = momentLocalizer(moment)
export default function calendar() {
    console.log("MOCK_EVENTS", MOCK_EVENTS);
    const events = MOCK_EVENTS?.map((event) => {
        // new Date(Y, M, D, H, MIN)
        return {
            title: event.title,
            start: new Date(event.start),
            end: new Date(event.end),
            color: event.color,
        };
    });
    console.log("events", events);
    return (
        <div className="">
            <Calendar
                localizer={localizer}
                startAccessor={"start"}
                events={events}
                endAccessor={"end"}
                style={{
                    height: "1000px",
                }}
                eventPropGetter={(event) => {
                    return {
                        style: {
                            backgroundColor: event.color,
                        },
                    };
                }}
                onSelectEvent={(event) => alert(event.title)}
                views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
            />
        </div>
    )
}