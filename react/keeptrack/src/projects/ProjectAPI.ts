import parseJson from "parse-json";
import { User } from "../models/user.model";
import { Project } from "./Project";
const baseUrl: string = "http://localhost";
const port: string = "4000";
const url: string = `${baseUrl}:${port}/projects`;
const urlUsers: string = `${baseUrl}:${port}/users/`;

function translateStatusToErrorMessage(status: number)
{
    switch(status){
        case 401:
            return 'Please login again.';
        case 403:
            return 'You do not have permission to view the project(s).';
        default:
            return 'There was an error retrieving the project(s). Please try again.';
    }
}

function checkStatus(response: any) {
    if (response.ok) {
      return response;
    } else {
      const httpErrorInfo = {
        status: response.status,
        statusText: response.statusText,
        url: response.url,
      };
      console.log(`log server http error: ${JSON.stringify(httpErrorInfo)}`);
  
      let errorMessage = translateStatusToErrorMessage(httpErrorInfo.status);
      throw new Error(errorMessage);
    }
}

function parseJSON(response: Response) {
    return response.json();
}
// eslint-disable-next-line
function delay(ms: number) {
    return function (x: any): Promise<any> {
      return new Promise((resolve) => setTimeout(() => resolve(x), ms));
    };
}
function convertToProjectModels(data: any[]): Project[] {
    let projects: Project[] = data.map(convertToProjectModel);
    return projects;
}
function convertToProjectModel(item: any): Project {
    return new Project(item);
}

const projectAPI = {
    get(page: number = 1, limit: number = 20){
        return fetch(`${url}?_page=${page}&_limit=${limit}&_sort=name`)
            .then(delay(600))
            .then(checkStatus)
            .then(parseJSON)
            .then(convertToProjectModels)
            .catch((error: TypeError) => {
                console.log('log client error ' + error);
                throw new Error(
                    'There was an error retrieving the projects. Please try again.'
                );
            })
    },

    put(project: Project) {
        return fetch(`${url}/${project.id}`, {
          method: 'PUT',
          body: JSON.stringify(project),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(checkStatus)
        .then(parseJSON)
        .catch((error: TypeError) => {
            console.log('log client error ' + error);
            throw new Error(
              'There was an error updating the project. Please try again.'
            );
          });
      },
    find(id: number)
    {
      return fetch(`${url}/${id}`)
        .then(checkStatus)
        .then(parseJSON)
        .then(convertToProjectModel)
    },
};

export { projectAPI };

const ApiUser = {
  get(){
    return fetch(urlUsers)
        .then(checkStatus)
        .catch((error: TypeError) => {
            console.log('log client error ' + error);
            throw new Error(
                'There was an error retrieving the projects. Please try again.'
            );
        })
  },
  get_users(){
    fetch(urlUsers)
      .then((res) => res.json())
      .then((data) => {return data; })
      .catch((error) => console.log(error))
      .finally(() => console.log('done'));
  }
}

export { ApiUser };

export default async function get_async() {
    const res = await fetch(urlUsers);
    const data = await res.json();
    return data;
}

/*
async function get_async(){
  const response = fetch(urlUsers);
  console.log(response);
  const data = response.json();
  console.log(data);
  return data;

}
*/

const getJSON = <T>(config: { url: string}): Promise<T> => {
  const fetchConfig = ({ method: 'GET'});
  return fetch(config.url, fetchConfig)
    .then<T>(response => response.json());
}

type UserType = {
  id: number;
  username: string;
  password: string;
  menus: number[];
}

type LoadUserResponse = {
  users: UserType[];
  [key: number]: UserType;
}

export function loadUsers(){
  const users = getJSON<UserType>({url: urlUsers})
    .then((res: UserType) => {
      
    });
}