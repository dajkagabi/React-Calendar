import { useState } from "react";
import "./Calendar.css";

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    //Napok, hónapok
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    //Hónap első napja
    const firstDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
    ).getDay();
    //Hónapok száma
    const daysInMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    ).getDate();

    //Előző hónap
    const prevMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
        );
    };
    //Következő hónap
    const nextMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
        );
    };

    //Naptári napok generálása, elrendezések (div által)
    const renderDays = () => {
        const days = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(
                <div key={i} className="calendar-day">
                    {i}
                </div>
            );
        }
        return days;
    };

    //Visszatérési érték
    return (
        <div className="calendar">
            <div className="calendar-header">
                <button onClick={prevMonth}>{"<"}</button>
                <h2>
                    {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h2>
                <button onClick={nextMonth}>{">"}</button>
            </div>
            <div className="calendar-days-of-week">
                {daysOfWeek.map((day) => (
                    <div key={day} className="calendar-day-of-week">
                        {day}
                    </div>
                ))}
            </div>
            <div className="calendar-grid">{renderDays()}</div>
        </div>
    );
};

export default Calendar;
