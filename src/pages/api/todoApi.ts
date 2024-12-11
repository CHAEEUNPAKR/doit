import { ImageUrl } from "@/interface/imageResponse";
import api from "./todo";
import { Task } from "@/interface/task";

const todoApi = {
  addTask: async (name: string, tenantId: string): Promise<Task> => {
    const response = await api.post(`${tenantId}/items`, { name });
    console.log(response.data);
    return response.data;
  },
  getTasks: async (tenantId: string): Promise<Task[]> => {
    const response = await api.get(`${tenantId}/items`);
    return response.data;
  },
  getTaskDetail: async (tenantId: string, itemId: number): Promise<Task> => {
    const response = await api.get(`${tenantId}/items/${itemId}`);
    return response.data;
  },
  editTask: async (
    tenantId: string,
    itemId: number,
    name: string,
    memo: string | "",
    imageUrl: string | "",
    isCompleted: boolean
  ): Promise<Task> => {
    const response = await api.patch(`${tenantId}/items/${itemId}`, {
      name,
      memo,
      imageUrl,
      isCompleted,
    });
    console.log(response);

    return response.data;
  },
  deleteTask: async (tenantId: string, itemId: number): Promise<string> => {
    const response = await api.delete(`${tenantId}/items/${itemId}`);
    console.log(response);

    return response.data;
  },
  uploadImage: async (
    tenantId: string,
    formData: FormData
  ): Promise<ImageUrl> => {
    const response = await api.post(`${tenantId}/images/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  },
};

export default todoApi;
