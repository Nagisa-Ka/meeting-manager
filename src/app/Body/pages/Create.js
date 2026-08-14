"use client";

import PulldownForm from "../components/form/PulldownForm";
import { users, meetingKinds } from "../config/config";
import DateForm from "../components/form/DateForm";
import TimeForm from "../components/form/TimeForm";
import CheckBoxForm from "../components/form/CheckBoxForm";
import { useState, useEffect } from "react";

export default function Create() {
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
        data.members = formData.getAll("members");

        if (data.members.length === 0) {
            alert("参加者を1つ以上選択してください");
        return;
  }

        const newMeeting = {
            id: crypto.randomUUID(),
            kind: data.meetingKind,
            day: data.day,
            time: data.startTime,
            members: data.members,
            room: null
        };

        meetings.push(newMeeting);
        localStorage.setItem("meetings", JSON.stringify(meetings));
        setMeetings(meetings);
        
        event.currentTarget.reset();
    }

    return (
        <form
            onSubmit={onSubmit}>

            <h2>会議の登録</h2>

            <PulldownForm
                label="会議の種類"
                list={meetingKinds}
                name="meetingKind" />

            <DateForm
                label="日付"
                name="day"/>

            <TimeForm
                label="開始時間"
                name="startTime"/>

            <CheckBoxForm
                label="参加者"
                name="members"
                list={users}/>
            
            <button
                className="submit-button"
                type="submit">
                登録する
            </button>

        </form>
    );
}