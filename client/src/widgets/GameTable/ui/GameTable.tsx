import { getTopicsWithQuestionsThunk } from "@/entities/topics/api";
import { TopicsCard } from "@/entities/topics/ui/TopicCard/TopicsCard";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import React, { useEffect } from "react";

export function GameTable(): JSX.Element {
  const dispatch = useAppDispatch();
  const topics = useAppSelector((state) => state.topic.topics);

  useEffect(() => {
    dispatch(getTopicsWithQuestionsThunk());
  }, [dispatch]);

  return (
    <div>
      {topics.map((el) => (
        <TopicsCard 
        topic={el}
        key={el.id}
        
        />
      ))}
    </div>
  );
}
