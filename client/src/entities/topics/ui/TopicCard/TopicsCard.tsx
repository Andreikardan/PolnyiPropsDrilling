import { Button } from "@/shared/ui/Button";
import React from "react";

export function TopicsCard({ topic }) {
  console.log(topic);

  return (
    <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      <div style={{ marginBottom: "10px" }}>{topic.title}</div>
      <div style={{ display: "flex" }}>
        {topic.Questions.map((el) => (
          <div
            key={el.id}
            style={{ marginRight: "10px", marginBottom: "10px" }}
          >
            <Button text={el.points} onClick={()=>{console.log(el)}
            }/>
          </div>
        ))}
      </div>
    </div>
  );
}
