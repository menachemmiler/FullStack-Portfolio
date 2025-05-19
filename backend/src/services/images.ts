import axios from "axios";
import { Image, ImageDTO } from "../types/projects";
import FormData from "form-data";

export const api = axios.create({
  baseURL: "https://google-cloud-storage.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// export const getAllImages = async () => {
//   const { data } = await api.get<Image[]>("api/images");
//   return data;
// };

export const createNewImage = async (image: ImageDTO) => {
  const formData = new FormData();
  formData.append("image", image.file.buffer, {
    filename: image.file.originalname,
    contentType: image.file.mimetype,
    knownLength: image.file.size,
  });
  const { data } = await api.post("upload", formData, {
    headers: formData.getHeaders(),
  });
  return data;
};
