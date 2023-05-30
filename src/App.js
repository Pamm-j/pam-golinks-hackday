import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import RepoList from "./components/ReproList";
import CommitList from "./components/CommitList";
import axios from "axios";

const App = () => {
  const [repos, setRepos] = useState([]);
  const [commits, setCommits] = useState([]);
  const [orgName, setOrgName] = useState("Netflix");

  const handleSearch = (data, org) => {
    setRepos(data);
    setOrgName(org);
  };

  const handleRepoClick = async (repoName) => {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/${orgName}/${repoName}/commits`
      );
      setCommits(response.data);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Router>
      <SearchBar onSearch={handleSearch} />
      <Routes>
        <Route
          path="/repo/:repoName/*"
          element={<CommitList commits={commits} />}
        />
        <Route
          path="/*"
          element={ <RepoList repos={repos} onRepoClick={handleRepoClick} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
