# Project Name
# Cendrol Technologies React Native Assignments 
## Description

This React Native project is an app that fetches TV show data from the API 'https://api.tvmaze.com/search/shows?q=all/' and displays it in a user-friendly manner. The app utilizes Flatlist, which efficiently renders the TV show list on the home page, providing essential details such as show name, show cover, runtime, and show rating. When a user clicks on a show item, they are navigated to the details screen, where they can view comprehensive information about the show, including rating, genre, runtime, language, country, streaming day, and a brief description.

## Screenshots

### Home Shows List
![Home Shows List 1](https://i.postimg.cc/MZ54bT8b/Home-Shows-List-1.png)
![Home Shows List 2](https://i.postimg.cc/HsLNSgYG/Home-Shows-List-2.png)

### Show Details
![Show Details 1](https://i.postimg.cc/hP3565vX/Show-Details-1.png)
![Show Details 2](https://i.postimg.cc/1Xvj9WKY/Show-Details-2.png)

## Features

- Fetches TV show data from the API 'https://api.tvmaze.com/search/shows?q=all/'.
- Utilizes Flatlist to efficiently render the TV show list on the home page, ensuring smooth scrolling and improved performance.
- Home page displays important show details like show name, show cover, runtime, and show rating.
- Allows users to click on a show item to navigate to the details screen.
- The details screen provides comprehensive information about the show, including rating, genre, runtime, language, country, streaming day, and a brief description.
- The code follows the latest coding standards and aims to closely match the design.
- Utilizes a component-based approach for better organization and maintainability.
- Navigation between different screens is achieved using the 'react-navigation' package.
- Implements state management using Redux, with a clear distinction between the store, actions, and reducers.

## How Flatlist Enhances User Experience

Flatlist efficiently renders the TV show list, even with large datasets, improving app performance. It dynamically loads data as the user scrolls, reducing resource consumption and enhancing user experience.

## Redux Overview

Redux is employed for state management. It consists of three components:

1. **Store**: Single source of truth for the app's state.

2. **Action**: Plain JavaScript objects describing events in the app.

3. **Reducer**: Pure functions specifying state changes in response to actions.

Redux ensures a predictable flow of data, enhancing code maintainability and scalability.