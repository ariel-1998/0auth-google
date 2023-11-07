import { CorsOptions } from "cors";

export const corsOptions: CorsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
};
