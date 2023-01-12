import React, {Fragment, useState } from 'react';
import { MOCK_PROJECT } from './MockProjects';
import ProjectList from './ProjectList';
import { Project } from './Project';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECT);
  const saveProject = (project: Project) => {
    let updatedProjects = projects.map((p: Project) => {
      return p.id === project.id ? project : p;
    });
  }
  return (
    <Fragment>
      <h1>Projects desde otro componente</h1>
      <ProjectList
        onSave={saveProject}
        projects={projects}/>
    </Fragment>
  )
}
