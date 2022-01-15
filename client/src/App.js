import "antd/dist/antd.css";
import { Button } from "antd";
import Home from "./pages/Home";
import AppliedJobs from "./pages/AppliedJobs";
import PostJob from "./pages/PostJob";
import Profile from "./pages/Profile";
import JobInfo from "./pages/JobInfo";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import FadeLoader from "react-spinners/FadeLoader";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserInfo from "./pages/UserInfo";
import EditJob from "./pages/EditJob";
import PostedJobs from "./pages/PostedJobs";
import { useEffect } from "react";
import { getAllUsers } from "./redux/actions/userActions";
import { getAllJobs } from "./redux/actions/jobActions";

function App() {
  const { loader } = useSelector((state) => state.loaderReducer);
  console.log(loader);
  const user = localStorage.getItem("user");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
    dispatch(getAllUsers());
  }, []);
  return (
    <div className="App">
      {loader && (
        <div className="sweet-loading text-center">
          <FadeLoader color={"#001529"} />
        </div>
      )}
      <Router>
        <Routes>
          <Route exact path="/" element={user ? <Home /> : <Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />

          <Route
            exact
            path="/appliedjobs"
            element={user ? <AppliedJobs /> : <Login />}
          />
          <Route
            exact
            path="/profile"
            element={user ? <Profile /> : <Login />}
          />
          <Route
            exact
            path="/jobs/:id"
            element={user ? <JobInfo /> : <Login />}
          />
          <Route
            exact
            path="/postjob"
            element={user ? <PostJob /> : <Login />}
          />
          <Route
            exact
            path="/posted"
            element={user ? <PostedJobs /> : <Login />}
          />
          <Route
            exact
            path="/users/:id"
            element={user ? <UserInfo /> : <Login />}
          />
          <Route
            exact
            path="/editjob/:id"
            element={user ? <EditJob /> : <Login />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// export function ProtectedRoute({ element: Component, ...restOfProps }) {
//   const isAuthenticated = localStorage.getItem("user");
//   console.log("this", isAuthenticated);

//   return (
//     <Route
//       {...restOfProps}
//       render={(props) =>
//         isAuthenticated ? <Component {...props} /> : <Navigate to="/register" />
//       }
//     />
//   );
// }

// export function ProtectedRoute(props) {
//   const navigate = useNavigate();
//   const user = localStorage.getItem("user");

//   if (!user) {
//     navigate("/login");
//   } else {
//     <Route {...props} />;
//   }
// }
