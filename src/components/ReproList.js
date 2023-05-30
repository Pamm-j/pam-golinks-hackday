import React from "react";
import { List, Divider } from "@mui/material";
import PropTypes from "prop-types";
import RepoListItem from "./ReproListItem";
import { Link } from "react-router-dom";

const ReproList = ({ repos, onRepoClick }) => {
  return (
    <List>
      {repos
        .sort((a, b) => b.stargazers_count - a.stargazers_count) // sort by star count
        .map((repo) => (
          <>
            <Link to={`/repo/${repo.name}`} style={{ textDecoration: "none" }}>
              <RepoListItem
                key={repo.id}
                repo={repo}
                onRepoClick={onRepoClick}
              />
              <Divider />
            </Link>
          </>
        ))}
    </List>
  );
};

ReproList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      stargazers_count: PropTypes.number.isRequired,
    })
  ).isRequired,
  onRepoClick: PropTypes.func.isRequired,
};
export default ReproList;
