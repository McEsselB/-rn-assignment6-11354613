# -rn-assignment6-11354613

# DCIT 202 (MOBILE APPLICATION DEVELOPMENT)

### Assignment 6

### STUDENT ID : 11354613

# Description of Task

This is the sixth assignment for the DCIT 202 (Mobile Application Development) course. The motive of this assignment is to buidl a simple e-commerce app with react native expo.

# App Overview

This is mobile e-commerce application built with React Native. The app allows users to browse products, add them to the cart, and proceed to checkout. It features a clean and modern design with an intuitive user interface.

# Development Tools Used for App Build.

- Expo Go, for real-time preview.
- Android Studio Emulator, for
- Expo CLI, for lanching development server.
- Visual Studio Code, for writing code managing files and folders.

## Steps I used to create a new React Native blank template project using Expo CLI.

- Run `npm install -g expo-cli`
- Run `expo init  fashion-commerce -- template blank`
- Run `cd fashion-commerce` to navigate into the project directory
- Run `npm run android` to start the development server
- Enter `a` to select `open on android`

## Features

### Product Listing

- Users can browse a list of products.
- Each product displays an image, name, details, and price.

### Cart Management

- Users can add products to their cart.
- Users can remove products from their cart.
- The cart displays a list of selected products with their details and prices.

### Checkout Process

- The app calculates the estimated total price of the products in the cart.
- Users can proceed to the checkout process.

### Persistent Storage

- The app uses AsyncStorage to persist the cart data across sessions.

## Components

### CartScreen

- The main screen for managing the cart.
- Displays the list of products added to the cart.
- Allows users to remove products from the cart.
- Shows the estimated total price and a checkout button.

### Product Card

- Displays individual product details.
- Includes product image, name, details, and price.
- A button to add the product to the cart.

### Header

- Displays the app logo and a search icon.
- Contains the checkout heading with an underline and circle design.

### Footer

- Shows the estimated total price.
- Contains the checkout button with a bag icon and text.

## Tools and Libraries

- **React Native**

  - The primary framework for building the app.
  - Provides fundamental UI components and APIs for mobile development.

- **React Navigation**

  - Handles the navigation within the app.
  - Used for implementing stack-based navigation.

- **AsyncStorage**

  - A local storage solution for persisting data across app sessions.
  - Used to save and load the cart data.

- **Expo**
  - A set of tools and services for building React Native apps.
  - Used for real-time preview, testing, and building the app.

## Screenshots of fashion-commerce app

![Screenshot](fashion-commerce/assets/images/Screenshot%202024-07-03%20185455.png)
![Screenshot](fashion-commerce/assets/images/Screenshot%202024-07-03%20185528.png)

## How to run app if cloning from this repo.

1. Clone the repository: `git clone https://github.com/McEsselB/-rn-assignment6-11354613.git`
2. Install Expo CLI: `npm install -g expo-cli`
3. Install various dependencies needed using: `npm install`
4. Start the development
   server: `expo start`
5. Open Expo Go app on your mobile device and scan the QR code displayed on the terminal OR to use an emulator, run command `a` after `expo start`, to live preview on android emulator.

### How to Setup Android Emulator Using Android Studio or VS Code

Watch👁️👁️ these two YouTube videos:

- How to setup in Android Studio

👉 https://www.youtube.com/watch?v=4rCNc3uhLJE

- How to setup emulator in vs code

👉 https://www.youtube.com/watch?v=as_HHSFT304

###### You can follow me on github 😉 @ https://github.com/McEsselB
