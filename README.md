# BIT Sindri Networking Platform

Welcome to the BIT Sindri Networking Platform, a web application designed to connect current students and alumni of BIT Sindri College. The platform fosters networking, mentorship, career guidance, and professional development by providing an easy-to-use interface for registration, login, and profile creation.

---

## 📖 Features

### 🌟 User Roles
- **Students**: 
  - Register with personal details, interests, and skills.
  - Explore opportunities to connect with alumni for guidance and mentorship.
  - View events created by alumni for professional growth and networking.
- **Alumni**:
  - Register with skills, professional position, and indicate availability for mentorship.
  - Serve as mentors for students and fellow alumni.
  - Create events and meetups for guidance and knowledge-sharing.

### 🔐 Authentication
- **Login Page**:
  - URL: `/login`
  - Provides secure access to the platform for registered users.

### 🏠 Home Page
- **Amazing UI**:
  - URL: `/`
  - Engaging and intuitive design to welcome users.
  - Offers an overview of the platform's features and easy navigation to other sections.
  - Highlights benefits of joining the platform and showcases its core functionalities.

### 📝 Registration
- **General Registration**:
  - URL: `/signup`
  - Allows users to choose their role (Student or Alumni) and proceed with registration.

- **Student Registration**:
  - URL: `/signup/student`
  - Students register by providing their details, interests, and preferred skills.

- **Alumni Registration**:
  - URL: `/signup/alumni`
  - Alumni register by sharing their professional position, skills, and availability for mentorship.

### 🌐 Explore Page
- **Filtered Alumni Listings**:
  - URL: `/explore`
  - Displays a list of all alumni who are open for mentorship.
  - Includes their skills, position, and a brief bio.
- **Connect for Mentorship**:
  - Each alumni listing features a **Connect** button.
  - Allows students to send a mentorship request directly to the alumni.

### 🗓️ Event Page
- **Event Creation for Alumni**:
  - URL: `/create-event`
  - Alumni have the ability to create events or meetups for students and fellow alumni, offering guidance and knowledge-sharing.
  - Events can be related to career development, skill-building workshops, or networking opportunities.
  
- **Event Viewing for Students**:
  - Students can view the list of upcoming events created by alumni.
  - Students can register for events to participate and interact with alumni.
  
- **Restricted Access**:
  - Only alumni can create events, ensuring relevant mentorship and guidance opportunities.
  - Students can only view and register for events, fostering a learning environment.

### 🔔 Notifications Page
- **General Notifications**:
  - URL: `/notifications`
  - Displays all the notifications related to networking events, mentorship requests, and other platform-related activities.
  
- **See All Notifications**:
  - Users can view all important updates regarding:
    - Event announcements.
    - Mentorship invitations.
    - Platform updates and new features.
  - **Real-time Alerts**: Users receive alerts when they are mentioned, or there is a new event or update regarding their interests.
  
- **Notifications for Students and Alumni**:
  - Both students and alumni receive notifications about:
    - Mentorship requests.
    - New events.
    - Event registrations.
    - Important platform announcements.

### 🌐 Connections Page
- **User Connections**:
  - URL: `/connections`
  - Allows users to view their current network of connections.
  - Users can see all accepted connections they have made with alumni or students.
  
- **Connection Requests**:
  - Users can view any pending connection requests they have received.
  - Each request includes a button to **Accept** or **Reject** the connection.
  - Upon accepting, the user becomes a connection, enabling them to exchange further messages or request mentorship.
  - If rejected, the request is removed from the pending list.

- **Types of Connections**:
  - Connections can be between students and alumni, as well as between students or between alumni.
  - The connection feature fosters better collaboration, mentorship, and professional growth among users.

### 📰 Announcements Page
- **Alumni Announcements**:
  - URL: `/announcements`
  - Alumni can create announcements related to professional updates, opportunities, or events they wish to share with students and fellow alumni.
  - Announcements can include job openings, project collaborations, or industry news.
  
- **Viewing Announcements for Students**:
  - Students can view all announcements posted by alumni.
  - Students can engage with announcements to learn about opportunities and upcoming professional activities.

- **Restricted Access**:
  - Only alumni are authorized to create announcements, ensuring that the information is relevant and professional.

### 📊 Analytics Page
- **Connection Analytics**:
  - URL: `/analytics`
  - Users can view detailed graphs showcasing the number of connections made with alumni over time.
  - The page provides insights into networking activity, helping users track their networking progress and engagement.
  
- **Graphical Representation**:
  - Analytics are visualized using interactive graphs.
  - Users can see trends over different time periods, such as monthly, quarterly, or yearly connections.

- **Data for Both Students and Alumni**:
  - Both students and alumni can view their connection trends, encouraging increased networking activities.

### 💬 Messaging Page
- **Message Alumni for Mentorship**:
  - URL: `/messaging`
  - Users can send messages to alumni to request mentorship or ask for more information on their expertise.
  - Allows students to engage in one-on-one conversations with alumni for career guidance and mentorship.
  - Supports a direct and private communication channel for mentorship requests.

- **Chat Interface**:
  - The page provides a user-friendly chat interface, making it easier for students and alumni to communicate.
  - Real-time messaging and notifications when new messages are received.

### 👤 Profile Page
- **View Your Profile**:
  - URL: `/profile`
  - Users can view and update their profile details, including:
    - Personal information (for students) or professional details (for alumni).
    - Skills, interests, and bio.
    - Profile picture and contact information.

- **Profile Settings**:
  - Users can update their information at any time to keep their profile up-to-date.

### 🆘 Help Page
- **Know More About the Platform**:
  - URL: `/help`
  - Provides a guide for new users on how to navigate the platform, how to register, and how to use the different features.
  - Includes a FAQ section for common questions and troubleshooting.
  - Helps users understand the various features and how they can benefit from them.

---

## 🚀 How to Run Locally

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14 or later)
- **npm** or **yarn**

### Steps
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/sindri-networking-platform.git
   cd sindri-networking-platform
