/* eslint-disable react/prop-types */
import React from 'react';
import { List, Divider } from '@mui/material';
import RepoListItem from './ReproListItem';


const ReproList = ({ repos, onRepoClick }) => {
  return (
    <List>
      {repos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)  // sort by star count
        .map((repo) => (
          <>
            <RepoListItem key={repo.id} repo={repo} onRepoClick={onRepoClick} />
            <Divider />
          </>
        ))}
    </List>
  );
};

export default ReproList;
