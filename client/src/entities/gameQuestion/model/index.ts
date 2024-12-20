import { QuestionType } from "@/entities/question/model";

export interface IGameQuestion {
    id:number;
    game_id: number;
    question_id: number;
    createdAt: Date;
    updatedAt: Date;
    Question: QuestionType;
    // Game: GameType
}

export type ArrayGameQUestionType = Array<IGameQuestion>;

