/* eslint-disable react/prop-types */
import React from "react";
import { List, Divider } from "@mui/material";
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

export default ReproList;
