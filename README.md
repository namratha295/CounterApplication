Counter App

A simple React Native application that demonstrates core React concepts like state management, props, and component re-rendering.

This project focuses on strengthening fundamentals by building a clean, component-based counter UI.

✨ Features

* Increment counter
* Decrement counter
* Reset counter
* Reusable button component
* Clean and minimal UI
* Component-based architecture

🧠 Concepts Covered

* useState for state management
* Props & unidirectional data flow
* Component re-rendering
* Event handling
* StyleSheet vs inline styling

Component separation and reusability

🏗️ Project Structure
src/
 ├── screens/
 │     └── HomeScreen.js
 └── components/
       ├── CounterCard.js
       └── CounterButton.js

🚀 How It Works

* The count state is managed in HomeScreen.
* CounterCard receives the count value via props.
* CounterButton receives handler functions via props.
* When the state updates, React Native re-renders the component automatically.
* This demonstrates how React follows a unidirectional data flow pattern.

🔮 Upcoming Improvements

* Add dark/light theme toggle
* Persist theme using AsyncStorage

## 📱 App Preview

![Counter App Screenshot Light Theme](./src/assets/lightTheme.png)
![Counter App Screenshot Dark Theme](./src/assets/darkTheme.png)
