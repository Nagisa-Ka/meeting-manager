"use client";

import React from "react";
import { useState, useEffect } from "react";

export default function Update() {
    const [meetings, setMeetings] = useState([]);

    useEffect(() => {
    const savedMeetings =
        JSON.parse(localStorage.getItem("meetings")) ?? [];
        setMeetings(savedMeetings);
    }, []);

    const sortedMeetings = [...meetings].sort((a, b) => {
      const dayCompare = a.day.localeCompare(b.day);

      if (dayCompare !== 0) {
        return dayCompare;
      }

      return a.time.localeCompare(b.time);
    });

    return (
        <form>

          <h2>会議一覧</h2>

          {sortedMeetings && sortedMeetings.length  > 0 ? (
              <table>

                  <thead>
                  <tr>
                    <th>種類</th>
                    <th>日付</th>
                    <th>時間</th>
                    <th>部屋</th>
                  </tr>
                </thead>

                <tbody>
                  {sortedMeetings.map((meeting) => (
                    <React.Fragment key={meeting.id}>
                      <tr>
                        <td>{meeting.kind}</td>
                        <td>{meeting.day}</td>
                        <td>{meeting.time}</td>
                        {meeting.room === null ? (
                          <td>未登録</td>
                        ):(
                          <td>{meeting.room}</td>
                        )}
                        
                      </tr>

                      <tr>
                        <td colSpan={4}
                          style={{ textAlign: "left" }}>
                          参加者：{meeting.members.join("、")}
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>

              </table>
          ):(
            <p>表示内容がありません。</p>
          )}

        </form>
    );
}