# CineStream – Movie Discovery Web App

## Overview

CineStream is a movie discovery web application built using React. The application allows users to browse popular movies, search for specific titles, and explore movies based on mood. Movie data is fetched dynamically from the TMDB (The Movie Database) API.

The goal of this project is to demonstrate modern front-end development using React, component-based architecture, API integration, and responsive UI design.

Live Server: https://cinestream-flax-seven.vercel.app/

---

## Features

* Browse popular movies fetched from TMDB API
* Search movies by title
* Mood-based movie recommendations
* Movie cards displaying poster, title, release year, and rating
* Favorites functionality using local storage
* Responsive movie grid layout
* Clean and modular React component structure

---

## Tech Stack

Frontend:

* React (Vite)
* JavaScript (ES6)
* CSS / Tailwind CSS

API:

* TMDB (The Movie Database) API

Tools:

* Git
* GitHub
* VS Code

---

## Project Structure

```
cinestream
│
├── src
│   ├── api
│   │   └── api.js
│   │
│   ├── components
│   │   ├── MovieCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   └── MoodMatcher.jsx
│   │
│   ├── hooks
│   │   └── useDebounce.js
│   │
│   ├── pages
│   │   ├── Home.jsx
│   │   └── Favorites.jsx
│   │
│   ├── utils
│   │   └── localStorage.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public
├── package.json
└── README.md
```

---

## Installation and Setup

1. Clone the repository

```
git clone https://github.com/your-username/cinestream-movie-app.git
```

2. Navigate into the project folder

```
cd cinestream-movie-app
```

3. Install dependencies

```
npm install
```

4. Run the development server

```
npm run dev
```

The application will start on:

```
http://localhost:5173
```

---

## API Configuration

This project uses the TMDB API.

1. Create an account at
   https://www.themoviedb.org

2. Generate an API key.

3. Add your API key inside the API configuration file.

Example:

```
const API_KEY = "YOUR_API_KEY"
```

---

## Learning Objectives

This project demonstrates:

* React functional components
* State management using React hooks
* API integration using fetch
* Custom hooks (useDebounce)
* Local storage for persistent data
* Component-based architecture
* Responsive layout design

---

## Future Improvements

* Pagination for movie results
* Movie details page
* User authentication
* Watchlist feature
* Better filtering and sorting
* Dark/light theme toggle

---

## License

This project is created for educational and portfolio purposes.
