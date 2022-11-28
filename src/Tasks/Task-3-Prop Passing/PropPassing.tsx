import { useCallback, useState } from "react";
import { PropPassingChild } from "./PropPassingChild";

export const PropPassing: React.FC = () => {
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const toggleIsMessageVisible = useCallback(() => {}, []);

  return (
    <>
      <PropPassingChild />
    </>
  );
};
