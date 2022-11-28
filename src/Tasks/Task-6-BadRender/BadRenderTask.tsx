import { ReactNode, useState } from "react";
import "../../Infrastructure/Task.css";

export const BadRenderTask: React.FC = () => {
  const [parentText, setParentText] = useState("This is the parent component!");

  const wrapperComponent: React.FC<ChildrenProps> = ({ children }) => {
    return <div id="this-is-a-wrapper">{children}</div>;
  };

  return (
    <>
      <p>{parentText}</p>

      <button
        title="parentRerenderButton"
        onClick={() => setParentText(parentText + "!")}
      >
        Rerender parent
      </button>

      <hr className="break" />

      <ConditionalWrapper condition={true} WrapperComponent={wrapperComponent}>
        <Counter />
      </ConditionalWrapper>
    </>
  );
};

/**************************************************/
/* !!! DO NOT MODIFY ANYTHING PAST THIS POINT !!! */
/**************************************************/

// Simple counter that increases when a user clicks "Increase count"
const Counter: React.FC = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>This is the wrapped child component.</p>
      <p title="badRenderCounter">{counter}</p>

      <button
        title="badRenderCounterButton"
        onClick={() => setCounter(counter + 1)}
      >
        Increase count
      </button>
    </div>
  );
};

type ChildrenProps = {
  children: React.ReactNode;
};

type ConditionalWrapperProps = {
  condition: boolean;
  WrapperComponent: React.FC<ChildrenProps>;
  children: ReactNode;
};

// If condition is met children are rendered wrapped in WrapperComponent
// If condition is NOT met, children are rendered by without the wrapper
const ConditionalWrapper: React.FC<ConditionalWrapperProps> = ({
  children,
  condition,
  WrapperComponent,
}) => {
  return condition ? (
    <WrapperComponent>{children}</WrapperComponent>
  ) : (
    <>children</>
  );
};
