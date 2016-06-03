import React, { PropTypes } from 'react';
import { Button, List, ListItem, ListItemContent, ListItemAction } from 'react-mdl';
import style from './selectJob.css';

function SelectJob({ project, startJob }) {
  function renderItem(projectData) {
    const [projectCode = '', projectName] = (projectData.name && projectData.name.split('#')) || [];

    return (
      <ListItem key={projectData.name} twoLine={!!(projectCode && projectName)}>
        <ListItemContent avatar="work" subtitle={projectCode && projectName}>
          {projectCode || projectName}
        </ListItemContent>
        <ListItemAction>
          <Button onClick={() => startJob(projectData.name)} raised accent ripple>Start</Button>
        </ListItemAction>
      </ListItem>
    );
  }

  return (
    <div>
      <List className={style.list}>
        {project.projects.map(renderItem)}
        {renderItem({ name: 'Unassigned' })}
      </List>
    </div>
  );
}

SelectJob.propTypes = {
  project: PropTypes.object,
  startJob: PropTypes.func.isRequired,
};

export default SelectJob;
