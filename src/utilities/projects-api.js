import sendRequest from "./send-request";

const BASE_URL = "/projects";

export async function getAllProjects() {
  return sendRequest(`${BASE_URL}/`); 
}

export async function getUsersProjects() {
  return sendRequest(`${BASE_URL}/user`); // This route doesn't yet exist
}

export async function addProject(newProject) {
  return sendRequest(`${BASE_URL}/`, "POST", newProject);
}