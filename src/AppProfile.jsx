import logo from "./logo.svg";
import "./App.css";
import Profile from "./Components/Profile";
import Avatar from "./Components/Avatar";

function AppProfile() {
  const handleClick = (evnet) => {
    alert("Yap");
  };
  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <Avatar
        url="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        isNew={true}
      />
      <Profile
        url="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        name="James Kim"
        title="프론트엔드 개발자"
        isNew={true}
      />
      <Profile
        url="https://images.unsplash.com/photo-1665999370084-24cb0d36d423?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=453&q=80"
        name="Anna Young"
        title="백엔드 개발자"
        isNew={false}
      />
      <Profile
        url="https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        name="Bob Yu"
        title="프론트엔드 개발자"
        isNew={false}
      />
    </>
  );
}

export default AppProfile;
