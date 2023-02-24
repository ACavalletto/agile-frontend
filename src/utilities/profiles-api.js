import sendRequest from "./send-request";

const BASE_URL = "/profiles";

export async function getLoggedInUserProfile() {
  return sendRequest(`${BASE_URL}/`);
}