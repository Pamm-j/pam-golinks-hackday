/* eslint-disable react/prop-types */
import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

const RepoListItem = ({ repo, onRepoClick }) => {
  return (
    <ListItem alignItems="flex-start" onClick={() => onRepoClick(repo.name)}>
      <ListItemText
        primary={repo.name}
        secondary={
          <List>
            <ListItem>
              <ListItemText
                secondary={`Stars: ${repo.stargazers_count}`}
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                secondary={`Forks: ${repo.forks_count}`}
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                secondary={`Language: ${repo.language}`}
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                secondary={`Created: ${repo.created_at}`}
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                secondary={`Description: ${repo.description}`}
              ></ListItemText>
            </ListItem>
          </List>
        }
      />
    </ListItem>
  );
};

export default RepoListItem;
