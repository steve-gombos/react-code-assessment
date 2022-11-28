// DO NOT ALTER OR CHANGE THIS COMPONENT

export const User: React.FC<{
  user: { userId: number; isComplete: boolean; isActive: boolean };
  index: number;
}> = ({ user, index }) => {
  return (
    <>
      <div title={`userId-${index}`}>User ID: {user.userId}</div>
      <div title={`isComplete-${index}`}>
        Is Complete: {user.isComplete.toString()}
      </div>
      <div title={`isActive-${index}`}>
        Is Active: {user.isActive.toString()}
      </div>
    </>
  );
};
