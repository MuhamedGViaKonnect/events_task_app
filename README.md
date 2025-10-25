🎟️ Simple Event Booking App

A React Native mobile application that allows users to browse, view details, and register for events, built as part of a React Native Developer Task. The app demonstrates modern React Native practices, API integration, authentication, and clean UI design.

📱 Features
* 🔐 User Authentication

Sign Up and Login with mockAPI.

Secure authentication flow using AsyncStorage.

* 📅 Event Listings

Fetch and display a list of events from mockAPI.

Each card shows event name, date & time, location, price, and image.

Tapping an event opens its details screen.

* 📝 Event Details

Displays complete event information:

Event Name

Date & Time

Location

Description

Speakers

Price (shows “Free” if applicable)

Image

Capacity

Available Spots

Includes a Register button to sign up for the event.

* 🧾 User Dashboard

Shows a list of events the user has registered for.

Data fetched from mockAPI.

* 👤 Profile

Accessed through the Bottom Tab Navigator.

Displays user details fetched from mockAPI or local storage.

Includes a Logout button that:

Clears authentication data.

Redirects user to the Login screen.

| Category             | Technology                             |
| -------------------- | -------------------------------------- |
| **Framework**        | React Native (CLI)                     |
| **Navigation**       | React Navigation (Stack + Bottom Tabs) |
| **State Management** | Redux Toolkit / Context API            |
| **API**              | [mockAPI.io](https://mockapi.io/)      |
| **HTTP Client**      | Axios                                  |
| **Storage**          | AsyncStorage                           |
| **Styling**          | Custom styles using StyleSheet         |
| **Language**         | TypeScript                             |

* 🧠 Bonus Implementations

✅ Redux Toolkit for state management
✅ Error handling with user-friendly messages
✅ Logout flow integrated in Profile tab
✅ Responsive UI across devices

🧪 Demo

🎥 Include a short screen recording showing:

Sign Up / Login

Event List

Event Details & Registration

Dashboard view

Profile tab & Logout

🧑‍💻 Author

Mohamed Gheeta
React Native Developer
🔗 LinkedIn
| 💻 GitHub
