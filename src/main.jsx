import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import {
  ChannelPlaylist,
  ChannelSubscribed,
  ChannelTweets,
  ChannelVideos,
  Dashboard,
  Feed,
  Home,
  Login,
  MyChannelTweets,
  MyChannelVideos,
  SignUp,
  VideoDetail,
  MyChannelSubscribed,
  MyChannelPlaylists,
  EditPersonalInfo,
  Settings,
  EditChannelInfo,
  ChangePassword,
  PlaylistVideos,
  AuthLayout,
} from "./components/index.js";
import FeedVideos from "./pages/FeedVideos.jsx";
import Channel from "./pages/Channel.jsx";
import MyChannel from "./pages/MyChannel.jsx";
import History from "./pages/History.jsx";
import LikedVideos from "./pages/LikedVideos.jsx";
import Subscribers from "./pages/Subscribers.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />}>
        <Route path="" element={<Feed />}>
          {/* Home Page Feed Videos */}
          <Route path="" element={<FeedVideos />} />
          {/* Playlists */}
          <Route path="playlist/:playlistId" element={<PlaylistVideos />} />
          {/* All Other Channels */}
          <Route path="user/:username" element={<Channel />}>
            <Route path="" element={<ChannelVideos />} />
            <Route path="playlists" element={<ChannelPlaylist />} />
            <Route path="tweets" element={<ChannelTweets />} />
            <Route path="subscribed" element={<ChannelSubscribed />} />
          </Route>
          {/* User Feeds */}
          <Route
            path="feed/history"
            element={
              <AuthLayout authentication>
                <History />
              </AuthLayout>
            }
          />
          <Route
            path="feed/liked"
            element={
              <AuthLayout authentication>
                <LikedVideos />
              </AuthLayout>
            }
          />
          <Route
            path="feed/subscribers"
            element={
              <AuthLayout authentication>
                <Subscribers />
              </AuthLayout>
            }
          />
          {/* Owning My Channel(currently Logged in user) */}
          <Route
            path="channel/:username"
            element={
              <AuthLayout authentication>
                <MyChannel />
              </AuthLayout>
            }
          >
            <Route path="" element={<MyChannelVideos />} />
            <Route path="tweets" element={<MyChannelTweets />} />
            <Route path="playlists" element={<MyChannelPlaylists />} />
            <Route path="subscribed" element={<MyChannelSubscribed />} />
          </Route>
          {/* Settings */}
          <Route
            path="settings"
            element={
              <AuthLayout authentication>
                <Settings />
              </AuthLayout>
            }
          >
            <Route path="" element={<EditPersonalInfo />} />
            <Route path="channelinfo" element={<EditChannelInfo />} />
            <Route path="changepwd" element={<ChangePassword />} />
          </Route>
        </Route>
        {/* Video Watching */}
        <Route path="/watch/:videoId" element={<VideoDetail />} />
        {/* Admin Dashboard */}
        <Route
          path="/admin/dashboard"
          element={
            <AuthLayout authentication>
              <Dashboard />
            </AuthLayout>
          }
        />
      </Route>
      <Route
        path="/login"
        element={
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <AuthLayout authentication={false}>
            <SignUp />
          </AuthLayout>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
