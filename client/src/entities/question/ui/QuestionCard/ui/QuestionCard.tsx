import styles from './QuestionCard.module.css';
import React, { useState } from 'react';
import { message as antMessage } from 'antd';
import { UserAnswerType, QuestionType } from '@/entities/question/model';
import { Button } from '@/shared/ui/Button';


// ДОДЕЛАТЬ 

type Props = {
  question: QuestionType;
  onUpdate: (updatedQuestion: UserAnswerType) => void;
  onDelete: () => void;
};

export const QuestionCard: React.FC<Props> = React.memo(
  ({ question, onDelete, onUpdate }) => {
    const initialInputsState = { question: question.question, answer: question.answer };
    const [isEditing, setIsEditing] = useState(false);
    const [inputs, setInputs] = useState<UserAnswerType>(initialInputsState);

    const isEmptyFormData =
      inputs.trim().length === 0 || inputs.body.trim().length === 0;

    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
      setInputs((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    }

    const handleEdit = () => {
      setIsEditing(true);
    };

    const handleCancel = () => {
      setIsEditing(false);
      setInputs(initialInputsState);
    };

    const handleSave = () => {
      if (isEmptyFormData) {
        antMessage.error('Все поля обязательны к заполнению');
        return;
      }
      setIsEditing(false);
      onUpdate(inputs);
      setInputs(initialInputsState);
    };

    return (
      <div className={styles.questionItem}>
        {isEditing ? (
          <>
            <input
              type='text'
              name='title'
              value={inputs.title}
              onChange={onChangeHandler}
              placeholder='Название задачи'
              className={styles.input}
            />
            <input
              type='text'
              name='body'
              value={inputs.body}
              onChange={onChangeHandler}
              placeholder='Описание задачи'
              className={styles.input}
            />
            <Button color='green' type='button' onClick={handleSave}>
              Сохранить
            </Button>
            <Button color='red' type='button' onClick={handleCancel}>
              Закрыть
            </Button>
          </>
        ) : (
          <>
            <h2 className={styles.title}>{question.title}</h2>
            <p className={styles.description}>{question.body}</p>
            <Button color='gray' type='button' onClick={handleEdit}>
              Изменить
            </Button>
            <Button color='red' type='button' onClick={onDelete}>
              Удалить
            </Button>
          </>
        )}
      </div>
    );
  }
);
