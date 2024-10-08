import axios from "axios";
import CosmosdbAdapterInstance from "./cosmosdb-adapter";
const getyyyymmdd = (date) => {
  if (!(date instanceof Date)) {
    throw new Error(`Invalid date object: ${date}`);
  }
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date: ${date}`);
  }
  return (
    date.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + date.getDate()).slice(-2)
  );
};

const userID = "user-1";
const startDate = new Date("2024-09-01");
const endDate = new Date("2024-10-01");

async function getAvailabilityByUser(userID, startDate, endDate) {
  try {
    const startDateIso = getyyyymmdd(startDate);
    const endDateIso = getyyyymmdd(endDate);
    const response = await axios.post(
      "http://localhost:5050/v1/availability/getAvailabilityByUser",
      {
        userID,
        startDate: startDateIso,
        endDate: endDateIso,
      }
    );
    //console.log(response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      console.error("Axios error config:", error.config);
      console.error("Axios error response:", error.response);
      console.error("Request data:", {
        userID,
        startDate,
        endDate,
      });
      console.error("Error response data:", error.response?.data);
    } else {
      console.error("Unknown error:", error);
    }
    throw error;
  }
}

getAvailabilityByUser(userID, startDate, endDate);
CosmosdbAdapterInstance.getAvailabilityByUser(userID, startDate, endDate);
