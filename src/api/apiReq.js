import axios from "axios";

const basicUrl = "http://localhost:3004/todos";

class Api {
  async getAllData() {
    const data = await axios.get(basicUrl);
    return data.data;
  }
  async getOneById(id) {
    return await axios.get(`${basicUrl}/${id}`);
  }
  async postData(obj) {
    return await axios.post(basicUrl, obj);
  }
  async deleteId(id) {
    return await axios.delete(`${basicUrl}/${id}`);
  }
  async updateId(id, obj) {
    return await axios.patch(`${basicUrl}/${id}`, obj);
  }
}

export default new Api();
