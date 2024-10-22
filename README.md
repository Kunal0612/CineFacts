## Demo : https://drive.google.com/file/d/1gY5OG2d9CQTlz7V2d5UH33WNB44TWprg/view?usp=sharing

## Tech Stack

### Frontend:
- **React.js**: The core library used to build the dynamic and interactive user interface. React's component-based architecture allows for modular development and reusability.
- **Redux**: Used for state management, ensuring consistent data flow across the application and providing a single source of truth for managing complex UI states.
- **Material-UI**: A popular React UI framework that provides pre-built, customizable components, helping create a modern and responsive design with minimal effort.
- **Axios**: A promise-based HTTP client used to handle API requests, enabling smooth communication with external APIs to fetch movie-related data.

### External API:
- **The Movie Database (TMDb) API**: Integrated to retrieve movie information such as details, reviews, and ratings, enhancing the app with real-time, up-to-date movie data.

### Hosting & Deployment:
- **Vercel/Netlify**: Deployed on Vercel or Netlify, offering continuous integration and seamless deployment from GitHub, ensuring the project is always accessible with fast load times and reliable hosting.

### Version Control:
- **Git/GitHub**: Git is used for version control, and GitHub hosts the project repository, enabling collaboration, issue tracking, and source code management.

---

## React Components Used in CineFacts

1. **App Component**:
   - **Purpose**: The root component of the application, responsible for rendering the overall structure and managing routes.
   - **Features**: 
     - Uses **React Router DOM** to handle navigation between different pages like the homepage, movie details, and search results.

2. **MovieList Component**:
   - **Purpose**: Displays a list of movies fetched from the TMDb API.
   - **Features**: 
     - Implements **React Infinite Scroll** to load more movies as the user scrolls, providing a seamless user experience.
     - Manages movie data and renders each movie as a card with basic details such as title and poster.

3. **MovieCard Component**:
   - **Purpose**: Renders individual movie details in the list, such as the movie poster, title, and release date.
   - **Features**: 
     - Optimizes image loading using the **React Lazy Load Image** component to ensure faster page loads and improved performance.

4. **MovieDetail Component**:
   - **Purpose**: Displays detailed information about a specific movie, including trailers, cast, and other metadata.
   - **Features**: 
     - Uses **React Player** to embed and play movie trailers, enhancing the user experience with video playback.
     - Fetches additional details from the TMDb API based on the movie ID passed via the router.

5. **SearchBar Component**:
   - **Purpose**: Allows users to search for movies by title.
   - **Features**: 
     - Captures user input and fetches search results from the API.
     - Provides real-time feedback as users type their queries.

6. **Navbar Component**:
   - **Purpose**: Provides navigation links to different sections of the app, such as Home, Popular Movies, and Search.
   - **Features**: 
     - Includes links to external pages (like your GitHub or LinkedIn profiles) for easy access to other projects.

7. **Loader Component**:
   - **Purpose**: Displays a loading spinner while waiting for API data to be fetched.
   - **Features**: 
     - Simple, reusable component that enhances user experience during data fetching processes.

---


## How to Run This Project

1. **Clone the repository**: 
   Begin by cloning this project to your local machine:
   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies**: 
   Navigate to the project directory and install all necessary dependencies by running:
   ```bash
   npm install
   ```

3. **Start the development server**:
   Once the dependencies are installed, you can run the project with the following command:
   ```bash
   npm run start
   ```
   This will start the app, and you can access it at `http://localhost:3000` in your browser.

**Note**: If you're experiencing issues accessing the website via the Reliance Jio network, it could be due to a temporary block on TMDb services. For uninterrupted access, we recommend using a Vodafone network or an alternative service provider.
