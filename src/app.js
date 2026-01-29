import express from "express";
import session from "express-session";
import passport from "passport";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

//import authRoutes from "./routes/authRoute.js";
import authRoute from "./routes/userRoute.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));
app.use(helmet());
app.use(morgan("dev"));
app.use(session({
  secret: "mysecretkey",
  resave: false,
  saveUninitialized: false
}));

import "./config/passport.js";

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/auth", authRoute);

export default app;
