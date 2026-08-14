"use client";

import RadioForm from "../components/form/RadioForm";
import { useState, useEffect } from "react";
import TextForm from "../components/form/TextForm";

export default function Update() {
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
    const savedMeetings =
        JSON.parse(localStorage.getItem("meetings")) ?? [];
        setMeetings(savedMeetings);
    }, []);

    const noRoomMeetings = meetings.filter((meeting) =>
            meeting.room === null);

    
    function onSubmit (event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);

        const newMeetings = meetings.map((meeting) => {
            if (meeting.id === data.meeting) {
                    return {
                    ...meeting,
                    room: data.roomNo
                };
            }
            return meeting;
            });

        localStorage.setItem("meetings", JSON.stringify(newMeetings));
        setMeetings(newMeetings)
        event.currentTarget.reset();
    }

    return (
        <form
            onSubmit={onSubmit}>

            <h2>部屋が未登録の会議一覧</h2>

            <RadioForm 
                name="meeting"
                list={noRoomMeetings} />
            
            {noRoomMeetings && noRoomMeetings.length > 0 ? (
                <TextForm
                label="部屋名"
                name="roomNo" />
            ) : null
            }
            

            <button
                className="submit-button"
                type="submit">
                部屋を登録する
            </button>

        </form>
    );
}