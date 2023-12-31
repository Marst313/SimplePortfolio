import axios from 'axios';

export const customFetchProjects = axios.create({
  baseURL: `https://api.airtable.com/v0/apppqFYuWedozYneL/projects/`,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_KEY}`,
  },
});
