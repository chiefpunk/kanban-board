import React from "react";
import { Grid, Typography, IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { green } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";
import styled from "styled-components";
const Box = styled(Grid)`
  margin: 5px;
  width: 100%;
  padding: 6px;
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Name = styled(Typography)`
  font-color: black;
  margin: 4px;
`;
const Actions = styled.div`
  display: flex;
`;
export default function Item({
  name,
  progress,
  forwardTask,
  removeTask,
  backTask,
  id,
}) {
  return (
    <>
      <Box item xs={12} zeroMinWidth>
        <Name>{name}</Name>
        <Actions>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            disabled={progress === 1 ? true : false}
            onClick={() => backTask(id)}
          >
            {progress === 1 ? (
              <ArrowBackIcon fontSize="small" color="disabled" />
            ) : (
              <ArrowBackIcon fontSize="small" style={{ color: green[500] }} />
            )}
          </IconButton>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            disabled={progress === 4 ? true : false}
            onClick={() => forwardTask(id)}
          >
            {progress === 4 ? (
              <ArrowForwardIcon fontSize="small" color="disabled" />
            ) : (
              <ArrowForwardIcon
                fontSize="small"
                style={{ color: green[500] }}
              />
            )}
          </IconButton>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={() => removeTask(id)}
          >
            <DeleteIcon fontSize="small" color="secondary" />
          </IconButton>
        </Actions>
      </Box>
    </>
  );
}
