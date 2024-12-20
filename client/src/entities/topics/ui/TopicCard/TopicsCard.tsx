import styles from "./TopicsCard.module.css";

import { QuestionType } from "@/entities/question/model";
import { Button } from "@/shared/ui/Button";
import { Modal } from "antd";
import React, { useState } from "react";
import { message as antMessage } from "antd";
// import { timerAntd } from "@/shared/ui/Timer/timerAntd";

type answerType = {
  answer: string;
};
// const initialInputsState = { ' };

export function TopicsCard({ topic }):JSX.Element {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState({});
  const [inputs, setInputs] = useState<answerType>({ answer: "" });

  const openModal = async (question: QuestionType) => {
    setValue(question);

    setOpen(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isEmptyFormData = inputs.answer.trim().length === 0;

    if (isEmptyFormData) {
      antMessage.error("Все поля обязательны к заполнению");
      return;
    }

    // const resultAction = await dispatch(createTaskThunk(inputs));
    // unwrapResult(resultAction);
    // setInputs(initialInputsState);
  };

  return (
    <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      <div style={{ marginBottom: "10px" }}>{topic.title}</div>
      <div style={{ display: "flex" }}>
        {topic.Questions.map((el) => (
          <div
            key={el.id}
            style={{ marginRight: "10px", marginBottom: "10px" }}
          >
            <Button
              text={el.points}
              onClick={() => {
                openModal(el);
              }}
            />
          </div>
        ))}
      </div>
      <Modal
        title={<h2>{value?.question}</h2>}
        footer={
          <div>
          
            <form className={styles.container} onSubmit={handleSubmit}>
              <input
                type="text"
                // value={inputs}
                name="answer"
                onChange={onChangeHandler}
                placeholder="Ваш ответ"
              />

              <Button type="submit" color="green">
                Отправить ответ
              </Button>
            </form>
            {/* <timerAntd/> */}
        
          </div>
        }
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      ></Modal>
      
    </div>
    
  );
}
