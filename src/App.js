import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import RepoList from "./components/RepoList";
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
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <BrowserRouter>
      <SearchBar onSearch={handleSearch} />
      <Routes>
        <Route
          path="/repo/:repoName/*"
          element={<CommitList commits={commits} />}
        />
        <Route
          path="/*"
          element={<RepoList repos={repos} onRepoClick={handleRepoClick} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
