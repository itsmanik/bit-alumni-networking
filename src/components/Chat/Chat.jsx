import React, { useState } from 'react';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';

const defaultChats = [
  {
    id: 1,
    name: 'Satish M H',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfoHR4N4fK95SQ6cyL0knP9vAMcWa2hrjNh2lv-c4wbA&s',
    unread: 0,
    messages: [
      { me: true, text: 'Hey Elon! We should organize an alumni mentorship program.', time: '11:45 AM' },
      { me: false, text: 'That sounds like a great idea! I’m in.', time: '11:50 AM' },
    ],
  },
  {
    id: 2,
    name: 'Richard Bezos',
    image: 'https://th.bing.com/th?q=Profile+for+Boys&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247',
    unread: 1,
    messages: [
      { me: true, text: 'Hey Jeff, are you attending the alumni networking event next week?', time: '12:00 PM' },
      { me: false, text: 'I’ll be there! Looking forward to catching up with everyone.', time: '12:05 PM' },
    ],
  },
  {
    id: 3,
    name: 'Bill James',
    image: 'https://th.bing.com/th/id/OIP.YDyoIafIwW1tILED3HgZRQHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    unread: 2,
    messages: [
      { me: true, text: 'Hey Bill, I was thinking we could host a webinar for alumni career advice.', time: '1:00 PM' },
      { me: false, text: 'Sounds like a fantastic idea! Let’s get started on that.', time: '1:02 PM' },
      { me: true, text: 'Let’s discuss the details tomorrow.', time: '1:05 PM' },
    ],
  },
  {
    id: 4,
    name: 'Ali Azad',
    image: 'https://th.bing.com/th/id/OIP.WazsBZZNILHEXLo0CyWlpAHaJO?w=136&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    unread: 0,
    messages: [
      { me: true, text: 'Sundar, are we on for the alumni event planning meeting at 3?', time: '2:30 PM' },
      { me: false, text: 'Yes, looking forward to it!', time: '2:32 PM' },
    ],
  },
  {
    id: 5,
    name: 'Mark Zuckerberg',
    image: 'https://th.bing.com/th?q=Profile+for+Boys&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247',
    unread: 3,
    messages: [
      { me: true, text: 'Hey Mark, I wanted to ask if you’d be interested in sponsoring an alumni event?', time: '3:00 PM' },
      { me: false, text: 'I’d be happy to help out with that. Let’s chat more about it soon.', time: '3:05 PM' },
      { me: true, text: 'Great! I’ll send over the details tomorrow.', time: '3:10 PM' },
      { me: false, text: 'Looking forward to it!', time: '3:15 PM' },
    ],
  },
  {
    id: 6,
    name: 'Tim Cook',
    image: 'https://th.bing.com/th/id/OIP.WazsBZZNILHEXLo0CyWlpAHaJO?w=136&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    unread: 0,
    messages: [
      { me: true, text: 'Tim, when is the next alumni event for tech leaders?', time: '4:00 PM' },
      { me: false, text: 'It’s scheduled for next week. I’ll send you the invite soon.', time: '4:10 PM' },
    ],
  },
  {
    id: 7,
    name: 'Satya Nadella',
    image: 'https://th.bing.com/th/id/OIP.YDyoIafIwW1tILED3HgZRQHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    unread: 4,
    messages: [
      { me: true, text: 'Satya, would you be interested in mentoring recent graduates from our alumni network?', time: '5:00 PM' },
      { me: false, text: 'I’d love to! Let’s discuss how I can help.', time: '5:05 PM' },
      { me: true, text: 'Fantastic, I’ll get in touch with the team tomorrow.', time: '5:10 PM' },
      { me: false, text: 'Looking forward to it!', time: '5:15 PM' },
    ],
  },
  {
    id: 8,
    name: 'Sheryl Sandberg',
    image: 'https://th.bing.com/th/id/OIP.WazsBZZNILHEXLo0CyWlpAHaJO?w=136&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    unread: 0,
    messages: [
      { me: true, text: 'Sheryl, are we ready for the alumni fundraising campaign launch?', time: '6:00 PM' },
      { me: false, text: 'Yes, everything is set. I’ll see you at the launch event.', time: '6:05 PM' },
    ],
  },
  {
    id: 9,
    name: 'Larry Page',
    image: 'https://th.bing.com/th?q=Profile+for+Boys&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247',
    unread: 1,
    messages: [
      { me: true, text: 'Hey Larry, how do you think we can improve our alumni events for future years?', time: '7:00 PM' },
      { me: false, text: 'We can make them more interactive and include more career resources.', time: '7:05 PM' },
    ],
  },
  {
    id: 10,
    name: 'Jack Dorsey',
    image: 'https://th.bing.com/th/id/OIP.YDyoIafIwW1tILED3HgZRQHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    unread: 2,
    messages: [
      { me: true, text: 'Jack, let’s discuss how to get more alumni involved in our mentorship program.', time: '8:00 PM' },
      { me: false, text: 'I’m on board. Let’s brainstorm some ideas for recruitment.', time: '8:05 PM' },
      { me: true, text: 'Great! I’ll send some initial thoughts tomorrow.', time: '8:10 PM' },
    ],
  },
];

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(7);

  return (
    <div className="chat flex flex-row w-full h-full">
      {/* Chat List (left) */}
      <ChatList chats={defaultChats} setSelectedChat={setSelectedChat} />
      {/* Chat Window (right) */}
      <ChatWindow chats={defaultChats} selectedChat={selectedChat} setSelectedChat={setSelectedChat} />
    </div>
  );
};

export default Chat;
