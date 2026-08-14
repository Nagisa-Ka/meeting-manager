"use client";

import { useState, useEffect } from "react";
import RadioForm from "../components/form/RadioForm";

export default function Delete() {
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
      const savedMeetings =
          JSON.parse(localStorage.getItem("meetings")) ?? [];
          setMeetings(savedMeetings);
    }, []);

    function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);

        const newMeetings = meetings.filter(
          (meeting) => meeting.id !== data.meeting
        );
        
        localStorage.setItem("meetings", JSON.stringify(newMeetings));
        
        event.currentTarget.reset();
        setMeetings(newMeetings);
    }

  return (
    <form
      onSubmit={onSubmit}>
                
        <h2>会議の削除</h2>

        <RadioForm 
            name="meeting"
            list={meetings} />

        <button
          className="submit-button"
          type="submit">
           会議を削除する
        </button>

    </form>
  );
}