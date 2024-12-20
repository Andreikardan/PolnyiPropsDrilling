export type QuestionType = {
  id:number,
  topic_id:number,
  question:string,
  answer:string,
  points:number,
}
export type ArrayQuestionType = Array<QuestionType>