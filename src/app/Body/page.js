"use client";

import { useState } from "react";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Read from "./pages/Read";
import Delete from "./pages/Delete";

export default function Body() {
  const [userSelected, setUserSelected] = useState("create");

  const components = {
    create: <Create />,
    update: <Update />,
    read: <Read />,
    delete: <Delete />
  };

  return (
    <div>
      
      <section className="main-button-container">
        <button onClick={() => setUserSelected("create")}>
          会議登録
        </button>

        <button onClick={() => setUserSelected("update")}>
          部屋登録
        </button>

        <button onClick={() => setUserSelected("read")}>
          会議一覧
        </button>

        <button onClick={() => setUserSelected("delete")}>
          削除
        </button>
      </section>

      <section className="main-form-container">
        {components[userSelected]}
      </section>

    </div>
  );
}