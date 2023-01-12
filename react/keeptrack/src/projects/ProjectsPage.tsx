import React, {Fragment, useEffect, useState } from 'react';
import ProjectList from './ProjectList';
import { Project } from './Project';
import { projectAPI } from './ProjectAPI';

export default function ProjectsPage() {
  
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const handleMoreClick = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  useEffect(() =>{
    setLoading(true);
    projectAPI
      .get(1)
      .then((data) => {
        setError(undefined);
        setLoading(false);
        setProjects(data);
      })
      .catch((e) => {
        setLoading(false);
        setError(e.message);
        if(e instanceof Error){
          setError(e.message);
        }
      });
  }, []);

  useEffect(() => {
    async function loadProjects() {
      setLoading(true);
      try {
        const data = await projectAPI.get(currentPage);
        if (currentPage === 1){
          setProjects(data);
        }else{
          setProjects((projects) => [...projects, ...data]);
        }
      }catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, [currentPage]);

  const saveProject = (project: Project) => {
    let updatedProjects = projects.map((p: Project) => {
      return p.id === project.id ? project : p;
    });
  }
  return (
    <Fragment>
      <h1>Projects desde otro componente</h1>
      {error &&
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse ">
                  {error}
                </span>
              </p>
            </section>
          </div>
        </div>
      }
      <ProjectList
        onSave={saveProject}
        projects={projects}/>
      {!loading && !error &&(
        <div className="row">
          <div className="col-sm-12">
            <div className="button-group fluid">
              <button className="button default" onClick={handleMoreClick}>
                More...
              </button>
            </div>
          </div>
        </div>
      )}
      {loading && (
        <div className="center-page">
          <span className="spinner primary"></span>
          <p>Loading...</p>
        </div>
      )}
    </Fragment>
  )
}
