# GitHub Organization Repository Explorer

This project is a simple, intuitive GitHub organization repository explorer. It allows you to view all repositories of an organization and their respective commits. The app is built with React.js and Material-UI for styling.

This project template is based on the [GoLinks Frontend Intern Hackday](https://github.com/GoLinks/frontend-intern-hackday) template.


## Live Demo
You can view the live demo of the application [here](https://sweet-pavlova-5ace70.netlify.app/).

## Features
- View a list of all repositories from a GitHub organization.
- List details include:
  - Repository name
  - Language used
  - Repository description
  - Star count
  - Fork count
  - Date of creation
- Click on a repository to view a list of all commits, including:
  - Commit message
  - Committer username
  - Commit hash
  - Date created
- Search functionality to find repositories from other GitHub organizations.
- All repositories and commits are sorted in descending order, ensuring you always see the most relevant results.

## Technologies Used
- React.js
- Material-UI
- GitHub API
- Axios

## Local Development
To get started with local development, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/yourrepositoryname.git
2. Navigate into the directory:
   ```bash
   cd yourrepositoryname
3. Navigate into the directory:
   ```bash
   npm install
4. Start the development server:
   ```bash
   npm start
The app should now be running on `localhost:3000`.

## Deployment
The application is deployed on Netlify. You can set up your own deployment by connecting your repository and following the steps provided by Netlify.

## Future Improvements
- Adding pagination for repositories and commits list.
- Enhanced search and filter capabilities.
- User authentication to allow saving favorite repositories.

## Contributing
Feel free to fork the repository and submit pull requests. All contributions are welcome!
