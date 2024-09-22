import { PrettyChatWindow } from "react-chat-engine-pretty";

const Chatpage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId="6c091596-263a-41a6-96f4-974ebf98f17d"
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};
  export default Chatpage;