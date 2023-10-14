import React, { useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { MOCK_EVENTS } from '../data/event';
import Modal from '../components/modal/Modal';

const localizer = momentLocalizer(moment);

interface EventData {
    title: string;
    start: Date;
    end: Date;
    color: string;
    description: string;
}

export default function CalendarPage() {
    const events: EventData[] | undefined = MOCK_EVENTS?.map((event) => {
        return {
            title: event.title,
            start: new Date(event.start),
            end: new Date(event.end),
            color: event.color,
            description: event.description,
        };
    });

    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

    const handleEventClick = (event: EventData) => {
        setSelectedEvent(event);
        setShowModal(true);
    };

    return (
        <div className="relative">
            <div className={showModal ? 'fixed inset-0 bg-black opacity-50 z-50' : 'hidden'}></div>
            <Calendar
                localizer={localizer}
                startAccessor="start"
                events={events}
                endAccessor="end"
                style={{
                    height: '1000px',
                }}
                eventPropGetter={(event: EventData) => {
                    return {
                        style: {
                            backgroundColor: event.color,
                        },
                    };
                }}
                onSelectEvent={handleEventClick}
                views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
            />
            <Modal show={showModal} event={selectedEvent} onClose={() => setShowModal(false)} />
        </div>
    );
}
