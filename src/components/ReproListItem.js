import React from "react";
import PropTypes from "prop-types";
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

RepoListItem.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    stargazers_count: PropTypes.number.isRequired,
    forks_count: PropTypes.number.isRequired,
    language: PropTypes.string,
    created_at: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
  onRepoClick: PropTypes.func.isRequired,
};

export default RepoListItem;
