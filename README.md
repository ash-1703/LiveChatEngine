
# Real-Time Chat Application

A full-stack real-time chat application built with **NodeJS**, **ReactJS**, and **ChatEngine.io**, allowing users to communicate through group chats, DMs, and more with support for real-time messaging, file attachments, and read receipts.

## 🚀 Features

- **User Authentication**: Users can sign in using their username, and authentication is handled using the ChatEngine API.
- **Real-Time Messaging**: Instant message delivery with socket connections, powered by ChatEngine.io.
- **Group Chats & DMs**: Create and manage group chats or direct messages between users.
- **File Attachments**: Send and receive images and other file types in chat.
- **Read Receipts**: Track when messages have been read by recipients.
- **Mobile-Responsive Design**: The chat UI is responsive and adapts to different screen sizes.

## 🛠️ Tech Stack

- **Frontend**: ReactJS
  - Prebuilt chat UI components using `react-chat-engine-pretty`
  - Axios for making API requests
- **Backend**: NodeJS
  - Express server for handling API requests
  - Axios for connecting with ChatEngine.io
  - CORS for managing cross-origin requests
- **Chat Management**: ChatEngine.io
  - Manages user authentication, chat history, and socket connections
  - Provides real-time messaging and chat features via APIs

## 📂 Project Structure

```
nodejs-reactjs-chat/
├── backend/
│   ├── index.js         # NodeJS server setup
│   └── package.json     # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── App.jsx      # Main app component
│   │   ├── AuthPage.jsx # Authentication page
│   │   ├── ChatsPage.jsx # Chat window component
│   ├── .env.local       # Environment variables (project ID)
│   └── package.json     # Frontend dependencies
```

## 📦 Installation
Clone the repository:
```bash
git clone https://github.com/yourusername/LiveChatEngine.git
cd LiveChatEngine
```
Backend Setup:
Navigate to the backend directory:
```
cd backend
```
Install dependencies:
```
npm install
```
Create a .env file for your backend and add your ChatEngine Private Key:
PRIVATE_KEY=your-chatengine-private-key
Start the backend server:
(install a vs code extension rest client)
create a file name -request.rest
add the following boiler plate
```
POST http://localhost:3001/authenticate
Content-Type: application/json

{
    "username": "ash-0173"
}
```
click on submit request to see if you have an update username with temporary password
```
npm run start
```

Frontend Setup:
Navigate to the frontend directory:

```
cd ../frontend
```
Install dependencies:

```
npm install
```
Create a .env.local file for the frontend and add your ChatEngine Project ID:

```
VITE_CHAT_ENGINE_PROJECT_ID=your-chatengine-project-id
```
Start the frontend:

```
npm run dev
```
Access the App:
Open your browser and go to http://localhost:3001 to start using the chat application.

##🔧 How It Works
Backend:
The backend NodeJS server exposes an /authenticate endpoint that interacts with ChatEngine.io to either fetch or create a user based on the provided username.

Frontend:
The ReactJS frontend displays two main pages:

Auth Page: Allows users to enter a username to authenticate.
Chats Page: Displays the real-time chat UI, leveraging react-chat-engine-pretty to handle messaging.
##🎯 Future Improvements
Push Notifications: Notify users of new messages when they are not in the app.
User Profiles: Add more user information like avatars or status messages.
Message Reactions: Allow users to react to messages with emojis.
Message Search: Implement a feature to search through chat history.
##🤝 Contributing
Contributions are welcome! Feel free to submit a Pull Request or open an Issue.

##📝 License
This project is licensed under the MIT License. See the LICENSE file for details.

### How to use this:

1. **Demo Section**: Add a GIF or screenshot to showcase how the app looks or behaves. You can upload images directly to your repository and link them in the `📸 Demo` section.
2. **Replace GitHub Repository Link**: Update the `git clone` command with the actual link to your GitHub repository.
3. **Replace Environment Variables**: Be sure to replace the placeholders `your-chatengine-private-key` and `your-chatengine-project-id` with your actual values in the `.env` file.

This is now a complete Markdown file ready for GitHub. Let me know if you need further adjustments!
##Reference
1. https://chatengine.io/
2. https://blog.chatengine.io/fullstack-chat/nodejs-reactjs
3. https://www.npmjs.com/package/react-chat-engine-pretty
