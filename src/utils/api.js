import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";

export const api=axios.create({
     baseURL: "https://full-stack-real-estate-youtube.vercel.app/api",
})