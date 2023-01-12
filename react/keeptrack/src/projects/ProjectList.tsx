import React from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
    projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="row">
        {
            projects.map((project) => (
               <div key={project.id} className="cols-sm">
                <ProjectCard project={project}/>
               </div>
            ))
        }
    </div>
  );
}
