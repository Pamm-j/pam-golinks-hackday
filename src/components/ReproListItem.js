/* eslint-disable react/prop-types */
import React from "react";
import { ListItem, ListItemText, Typography } from "@mui/material";

const RepoListItem = ({ repo, onRepoClick }) => {
  return (
    <ListItem alignItems="flex-start" onClick={() => onRepoClick(repo.name)}>
      <ListItemText
        primary={repo.name}
        secondary={
          <>
            <Typography component="span" variant="body2" ccolor="textPrimary">
              Stars: {repo.stargazers_count} - Forks: {repo.forks_count} -
              Language: {repo.language} - Created: {repo.created_at}
            </Typography>
            {" — " + repo.description}
          </>
        }
      />
    </ListItem>
  );
};

export default RepoListItem;
