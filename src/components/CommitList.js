import React from 'react';
import PropTypes from 'prop-types';
import { List, Divider } from '@mui/material';
import CommitListItem from './CommitListItem';

const CommitList = ({ commits }) => {
  return (
    <List>
      {commits
        .map((commit) => (
          <React.Fragment key={commit.sha}>
            <CommitListItem commit={commit} />
            <Divider />
          </React.Fragment>
        ))}
    </List>
  );
};

CommitList.propTypes = {
  commits: PropTypes.arrayOf(
    PropTypes.shape({
      sha: PropTypes.string.isRequired,
      commit: PropTypes.shape({
        message: PropTypes.string.isRequired,
        committer: PropTypes.shape({
          name: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default CommitList;
