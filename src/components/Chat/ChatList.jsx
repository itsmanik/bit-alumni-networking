import React from 'react';

const ChatList = ({ chats, setSelectedChat }) => {
  return (
    <div className="chat-list w-1/3 bg-white p-4 overflow-y-auto" style={{ maxHeight: '100vh', scrollbarWidth: 'thin', scrollbarColor: '#3A843A transparent' }}>
      <h2 className="text-xl font-bold text-[#3A843A] mb-4">Mentorship</h2>
      <div className="chat-items">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="chat-item p-2 flex items-center cursor-pointer hover:bg-[#F1F1F1] rounded mb-2"
            onClick={() => setSelectedChat(chat.id)}
          >
            <img src={chat.image} alt={chat.name} className="w-10 h-10 rounded-full mr-3" />
            <div>
              <h4 className="font-semibold text-[#3A843A] text-sm">{chat.name}</h4>
              <p className="text-sm text-gray-600">{chat.messages[chat.messages.length - 1].text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
