import { TopicType } from '@/entities/user';

export type UserAnswerType ={
  answer: string;
}

export type QuestionType = {
  id: number;
  topic_id: number;
  answer: string,
  question:string,
  points: number,
  createdAt: Date;
  updatedAt: Date;
  Topic: TopicType;
}

export type ArrayQuestionsType = Array<QuestionType>

