import React from "react";
import { Switch, Route } from "react-router-dom";
// pages
import LoginPage from "./pages/LoginPage";
import FeedPage from "./pages/FeedPage";
import PostPage from "./pages/PostPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LoginPage />
      </Route>
      <Route exact path="/register">
        <RegisterPage />
      </Route>
      <Route exact path="/feed">
        <FeedPage />
      </Route>
      <Route exact path="/post/:id">
        <PostPage />
      </Route>
      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default Routes;
