export const UserView = ({userData, onBackClick}) => {
    return (
    <>
        <div><span>Username: </span><span>{userData.username}</span></div>;
        <div><span>ID: </span><span>{userData.id}</span></div>;
        <div><span>email: </span><span>{userData.email}</span></div>;
        <div><span>Fave Color: </span><span>{userData.faveColor}</span></div>;
        <button onClick={onBackClick}>Back</button>
    </>
    );
};