import {  ArrayQuestionType } from "@/entities/question/model/types"

export type TopicsType = {
  id:number
  title:string,
  question:ArrayQuestionType
}
export type ArrayTopicsType = Array<TopicsType>