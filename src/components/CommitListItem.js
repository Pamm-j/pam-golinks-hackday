import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, ListItemText } from "@mui/material";

const CommitListItem = ({ commit }) => {
  const {
    sha,
    commit: { message, committer },
  } = commit;

  return (
    <ListItem>
      <ListItemText
        primary={message}
        secondary={
          <List>
            <ListItem>
              <ListItemText secondary={`Commit Hash: ${sha}`}></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                secondary={`Committer: ${committer.name}`}
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText
                secondary={`Date: ${committer.date}`}
              ></ListItemText>
            </ListItem>
          </List>
        }
      />
    </ListItem>
  );
};

CommitListItem.propTypes = {
  commit: PropTypes.shape({
    sha: PropTypes.string.isRequired,
    commit: PropTypes.shape({
      message: PropTypes.string.isRequired,
      committer: PropTypes.shape({
        name: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default CommitListItem;
