import sendRequest from "./send-request";

const BASE_URL = "/profiles";

export async function getAllProfiles() {
  return sendRequest(`${BASE_URL}/`);
}

export async function checkUserExists(uid) {
  return sendRequest(`${BASE_URL}/check/${uid}`);
}

export async function createProfile(profileData) {
  return sendRequest(`${BASE_URL}/`, "POST", profileData);
}

export async function getLoggedInUserProfile(uid) {
  return sendRequest(`${BASE_URL}/${uid}`);
}

export async function updateProfile(uid, profileData) {
  return sendRequest(`${BASE_URL}/${uid}`, "PUT", profileData);
}

export async function deleteProfile(uid) {
  return sendRequest(`${BASE_URL}/${uid}`, "DELETE");
}