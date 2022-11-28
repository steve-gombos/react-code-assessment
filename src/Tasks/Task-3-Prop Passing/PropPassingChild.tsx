export const PropPassingChild: React.FC = () => {
  const message = "Task passed succesfully!";

  return (
    <>
      <p title="propPassingHiddenMessage"></p>

      <button title="propPassingButton" onClick={undefined}>
        Click to show the hidden message
      </button>
    </>
  );
};
