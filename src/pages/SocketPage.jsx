// // import React, { useState, useEffect } from 'react';
// // import io from 'socket.io-client';

// // const socket = io();

// // function SocketPage() {
// //   const [isConnected, setIsConnected] = useState(socket.connected);
// //   const [lastPong, setLastPong] = useState(null);

// //   useEffect(() => {
// //     socket.on('connect', () => {
// //       setIsConnected(true);
// //       console.log(isConnected);
// //     });

// //     socket.on('disconnect', (arg) => {
// //       setIsConnected(false);
// //       console.log(isConnected);
// //       console.log(arg);
// //     });

// //     socket.on('pong', () => {
// //       setLastPong(new Date().toISOString());
// //     });

// //     return () => {
// //       socket.off('connect');
// //       socket.off('disconnect');
// //       socket.off('pong');
// //       console.log('이건 뭔가요');
// //     };
// //   }, []);

// //   const sendPing = () => {
// //     socket.emit('ping');
// //   }
// //   console.log(isConnected);
// //   console.log(lastPong);
// //   console.log(socket);

// //   return (
// //     <div>
// //       <p style={{color:"white"}}>Connected: { '' + isConnected }</p>
// //       <p style={{color:"white"}}>Last pong: { lastPong || '-' }</p>
// //       <button onClick={ sendPing }>Send ping</button>
// //     </div>
// //   );
// // }

// // export default SocketPage;

// // import React, { useState, useEffect } from 'react';

// // const io = require('socket.io-client');
// // const socket = io('ws://3.38.209.226/stomp');

// // function SocketPage() {

// //   const [messageCount, setMessageCount] = useState(0);
// //   const [theme, setTheme] = useState('dark');
// //   const [inRoom, setInRoom] = useState(false);

// //    useEffect(() => {

// //     if(inRoom) {
// //       console.log('joining room');
// //       socket.emit('room', {room: 'test-room'});
// //     }

// //     return () => {
// //       if(inRoom) {
// //         console.log('leaving room');
// //         socket.emit('leave room', {
// //           room: 'test-room'
// //         })
// //       }
// //     }
// //   });

// //   useEffect(() => {
// //     socket.on('receive message', payload => {
// //       setMessageCount(messageCount + 1);
// //       document.title = `${messageCount} new messages have been emitted`;
// //       console.log(payload);
// //     });
// //   }, []); //only re-run the effect if new message comes in

// //   const handleSetTheme = () => {
// //     let newTheme;
// //     (theme === 'light')
// //       ? newTheme = 'dark'
// //       : newTheme = 'light';
// //     console.log('new theme: ' + newTheme);
// //     setTheme(newTheme);
// //   }

// //   const handleInRoom = () => {
// //     inRoom
// //       ? setInRoom(false)
// //       : setInRoom(true);
// //   }

// //   const handleNewMessage = () => {
// //     console.log('emitting new message');
// //     socket.emit('new message', {
// //       room: 'test-room'
// //     });
// //     socket.emit('hello!');
// //     setMessageCount(messageCount + 1);
// //   }

// //   return (
// //     <div className={`App Theme-${theme}`}>
// //       <header className="App-header">

// //         <h1>
// //           {inRoom && `You Have Entered The Room` }
// //           {!inRoom && `Outside Room` }
// //         </h1>

// //         <p>{messageCount} messages have been emitted</p>

// //         {inRoom &&
// //         <button onClick={() => handleNewMessage()}>
// //           Emit new message
// //         </button>
// //         }

// //         <button onClick={() => handleSetTheme()}>
// //           Toggle Theme
// //         </button>

// //         <button onClick={() => handleInRoom()}>
// //           {inRoom && `Leave Room` }
// //           {!inRoom && `Enter Room` }
// //         </button>

// //       </header>
// //     </div>
// //   );
// // }

// // export default SocketPage;

// import React, { useState, useEffect, useRef } from "react";
// import * as StompJs from "@stomp/stompjs";
// import * as SockJS from "sockjs-client";

// const ROOM_SEQ = 1;

// function SocketPage() {
//   const client = useRef({});
//   const [chatMessages, setChatMessages] = useState([]);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     connect();
//     return () => disconnect();
//   }, []);

//   const connect = () => {
//     client.current = new StompJs.Client({
//       brokerURL: "ws://3.38.209.226/stomp", // 웹소켓 서버로 직접 접속
//       connectHeaders: {
//         Authorization: `${localStorage.getItem("access_token")}`,
//         "Refresh-Token": `${localStorage.getItem("refresh_token")}`,
//       },
//       headers: {
//         Authorization: `${localStorage.getItem("access_token")}`,
//         "Refresh-Token": `${localStorage.getItem("refresh_token")}`,
//       },
//       debug: function (str) {
//         console.log(str);
//       },
//       reconnectDelay: 5000,
//       heartbeatIncoming: 4000,
//       heartbeatOutgoing: 4000,
//       onConnect: () => {
//         subscribe();
//         console.log("됨");
//       },
//       onStompError: frame => {
//         console.error(frame);
//       },
//     });
//     client.current.activate();
//   };

//   const disconnect = () => {
//     client.current.deactivate();
//   };

//   const subscribe = () => {
//     client.current.subscribe(`/sub/chat/room/1`, ({ body }) => {
//       setChatMessages(_chatMessages => [..._chatMessages, JSON.parse(body)]);
//     });
//     console.log("sub 됨");
//   };

//   const publish = message => {
//     if (!client.current.connected) {
//       return;
//     }

//     client.current.publish({
//       destination: "/pub/chat/message",
//       body: JSON.stringify({ roomId: ROOM_SEQ, message }),
//       // body:`${message}`,
//     });
//     console.log(message);
//     setMessage("");
//   };

//   return (
//     <div>
//       {chatMessages && chatMessages.length > 0 && (
//         <ul>
//           {chatMessages.map((_chatMessage, index) => (
//             <li key={index}>{_chatMessage.message}</li>
//           ))}
//         </ul>
//       )}
//       <div>
//         <input
//           type={"text"}
//           placeholder={"message"}
//           value={message}
//           onChange={e => setMessage(e.target.value)}
//           onKeyPress={e => e.which === 13 && publish(message)}
//         />
//         <button onClick={() => publish(message)}>send</button>
//       </div>
//     </div>
//   );
// }

// // export default SocketPage;
