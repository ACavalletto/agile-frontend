import sendRequest from "./send-request";

const BASE_URL = "/projects";

export async function getAllProjects() {
  return sendRequest(`${BASE_URL}/`); 
}

export async function getUsersProjects() {
  return sendRequest(`${BASE_URL}/user`); // This route doesn't yet exist
}

export async function showProject(projectID) {
  return sendRequest(`${BASE_URL}/${projectID}`); 
}

export async function addProject(newProject) {
  return sendRequest(`${BASE_URL}/`, "POST", newProject);
}

export async function updateProject(projectID, projectData) {
  return sendRequest(`${BASE_URL}/${projectID}`, "PUT", projectData);
}

export async function deleteProject(projectID) {
  return sendRequest(`${BASE_URL}/${projectID}`, "DELETE");
}