## 🚀 Introduction

Have you ever found yourself exhausted by the process of planning events through scattered messaging platforms, only to end up with missed messages and incomplete information?

I created this app as I was personally tired of the frustrations associated with organizing events through WhatsApp, iMessage, and other messaging services. The constant need to create new groups and the lack of proper responses from participants inspired me to develop Pyvu. This innovative web application aims to solve these problems by providing a centralized platform that brings all the important event information front and center. Say goodbye to the chaos of event planning and embrace the simplicity and efficiency of Pyvu.

So this is my project for the #AppwriteHackathon

## 👥 Team Member:

@[Anirudh](@anirudhisonline) - @anirudhisonline

## 📋 Description:

Pyvu is a SaaS web application developed by Anirudhisonline to streamline event management and collaboration. With Pyvu, users can effortlessly create events, invite friends, and collaborate using shared to-do lists and real-time chat. The platform provides a comprehensive solution for event planning, ensuring seamless communication and coordination among participants.

## 🔑 Key Features:

* **Event Creation:** Users can create events by specifying details such as date, location (online or offline), description, and other relevant information 📅📍📝
    
* **Friend Invitations:** Event hosts can invite their friends and colleagues to join the event, ensuring everyone stays connected and informed 👥📩
    
* **Shared To-Do List:** Collaborators can access and contribute to a shared to-do list, enabling them to add, complete, and delete tasks in real-time ✅📋
    
* **Real-Time Chat:** Event attendees can communicate with each other through a real-time chat feature, fostering seamless collaboration and information sharing 💬🔄
    
* **RSVP/Participants:** The platform provides an overview of the participants attending the event, allowing hosts to manage and track attendee information effectively ✅👥
    

## 🔧 Tech Stack:

* Frontend: SvelteKit, HTML, CSS, JavaScript
    
* Styling: Tailwind CSS with Daisy UI
    
* Backend: Appwrite (BaaS - Backend as a Service)
    
* Appwrite Services:
    
    * **Storage** 📦: Users can choose from a variety of invitation backgrounds, and the selected background is dynamically fetched and displayed based on their choice. By utilizing Appwrite's storage services.
        
    * **Functions** 🖥️: Appwrite functions were used to facilitate the team joining process for users. Leveraging the server-side capabilities of Appwrite, allows users to seamlessly join a team without the need for complex frontend interactions by just clicking a button instead of from the email.
        
    * **Database** 🗄️: The central storage solution for all event-related information, chat messages, and to-do lists was Appwrite documents. The Document-level read-and-write permission based on users and teams was really helpful and the Appwrite SDK was easy to follow.
        
    * **Authentication** 🔐 : Setting up Google OAuth for user login was incredibly easy with Appwrite's authentication service. It provided a seamless integration for users to log in using their Google accounts.
        
    * **Realtime** ⚡: Appwrite's Realtime services enabled easy implementation of chat functionality and also updating Todo tasks easily and make everything realtime and thus increasing the collaboration and smooth interaction among the users where they are connected while planning the event
        
* Hosting: Vercel 🌐
    

## 💡 Challenges I Faced:

During the development process, I encountered a challenge with managing relationship attributes, as they were not available at that time. However, I found a workaround and successfully managed the relationships between different entities in my application.

Another challenge I faced was enabling the users to join teams directly from the front end. I addressed this challenge by utilizing Appwrite Cloud Functions to handle the team joining process efficiently.

Throughout these challenging times, the Appwrite Discord community was an invaluable resource. The community provided guidance, support, and helpful insights, enabling me to overcome obstacles and make the most of Appwrite's features.

## Conclusion:

In conclusion, I want to express my sincere gratitude to Appwrite and Hashnode for organizing this incredible hackathon. The support and resources provided by Appwrite's robust backend services, including storage, functions, database, authentication, and real-time capabilities, have been invaluable in bringing Pyvu to life. I am grateful for the opportunity to participate in this hackathon and showcase the power of Appwrite. I would like to encourage fellow developers to explore the capabilities of [Appwrite](https://appwrite.io) ([**https://appwrite.io**](https://appwrite.io)) and join the vibrant [Hashnode](https://hashnode.com) community ([**https://hashnode.com**](https://hashnode.com)).
