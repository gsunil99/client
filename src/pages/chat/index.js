import styles from './styles.module.css';
import RoomAndUsersColumn from './room-and-users';
import SendMessage from './send-message';
import MessagesReceived from './messages';

const Chat = ({ userId, room, socket }) => {
  return (
    <div className={styles.chatContainer}>
      <RoomAndUsersColumn socket={socket} userId={userId} room={room} />

      <div>
        <MessagesReceived socket={socket} />
        <SendMessage socket={socket} userId={userId} room={room} />
      </div>
    </div>
  );
};

export default Chat;
