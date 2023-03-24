

export const UserCard = ({userData, onUserClick}) => {
    return (
        <div
        onClick={() => {
          onUserClick(userData);
        }}
        >
          {userData.username}
        </div>
    );
  };