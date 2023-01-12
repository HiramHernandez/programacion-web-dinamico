import React from 'react';
import { MOCK_PROJECT } from './MockProjects';
import ProjectList from './ProjectList';

export default function ProjectsPage() {
  return (
    <>
      <h1>Projects desde otro componente</h1>
      <ProjectList projects={MOCK_PROJECT}/>
    </>
    
  )
}
