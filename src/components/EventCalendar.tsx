import React from "react";
import { Calendar } from "antd";
import { IEvent } from "../moduls/IEvent";

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: React.FC<EventCalendarProps> = () => {
  return <Calendar />;
};

export default EventCalendar;
