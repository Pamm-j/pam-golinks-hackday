import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RepoList from './components/ReproList';
import CommitList from './components/CommitList';
import axios from 'axios';


const App = () => {
  const [repos, setRepos] = useState([]);
  const [commits, setCommits] = useState([]);
  const [orgName, setOrgName] = useState('Netflix');


  const handleSearch = (data, org) => {
    setRepos(data);
    setOrgName(org);
  }

  const handleRepoClick = async (repoName) => {
    try {
      const response = await axios.get(`https://api.github.com/repos/${orgName}/${repoName}/commits`);
      setCommits(response.data);
      console.log(response.data)
    } catch (err) {
      console.error(err);
    }
  }

  

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <RepoList repos={repos} onRepoClick={handleRepoClick} />
      <CommitList commits={commits} />

    </div>
  );
};

export default App;
