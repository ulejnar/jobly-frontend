import axios from 'axios';

const BASE_URL = "http://localhost:3001";

class JoblyApi {
  static async request(endpoint, params = {}, verb = "get") {
    console.debug("API Call:", endpoint, params, verb);

    const _token = localStorage.getItem('_token');
    console.log("_token", _token);

    const data = (verb === "get")
      ? { params: { _token, ...params } } // GET
      : { _token, ...params };            // POST, PATCH


    const req = axios[verb](`${BASE_URL}/${endpoint}`, data);

    try {
      return (await req).data;
    } catch (err) {
      console.error("API Error:", err);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Indiv API routes

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getCompanies(query = {}) {
    let res = await this.request('companies', query);
    return res.companies;
  }

  static async getJobs(query = {}) {
    let res = await this.request('jobs', query);
    return res.jobs;
  }

  // Auth API routes 
  
  static async login(data) {
    let res = await this.request('login', data, 'post');
    return res.token;
  }

  static async signup(data) {
    let res = await this.request('users', data, 'post');
    return res.token;
  }

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

}

export default JoblyApi;