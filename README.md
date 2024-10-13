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
