import React, { useState } from "react";
import axios from "axios";

export default function useGlobalContextApp() {
  const [infoAuth, setInfoAuth] = useState(null);
  const [newUser, setNewUser] = useState(null);
  const [userById, setUserById] = useState(null);
  const [postProfile, setPostProfile] = useState(null);
  const [listPosts, setListPosts] = useState(null);
  const [error, setError] = useState(null);
  const [commentsByPost, setCommentsByPost] = useState(null);
  const BASE_URL = "https://dummyapi.io/data/v1/";
  const APP_ID = "65174ba04131241b71f85a00";
  let pageNumber = 1;
  let limitNumber = 20;

  //User
  const createUser = async () => {
    console.log("infoAuthCreate", infoAuth);
    let userCreateData = {
      firstName: infoAuth?.given_name,
      lastName: infoAuth?.family_name,
      email: infoAuth?.email,
    };

    axios
      .post(`${BASE_URL}user/create`, userCreateData, {
        headers: { "app-id": `${APP_ID}` },
      })
      .then((res) => {
        setNewUser(res);
        const userCreatedInfo = res.data;
        localStorage.setItem(infoAuth.email, JSON.stringify(userCreatedInfo));
      })
      .catch(function (res_error) {
        if (res_error.response.data.data.email === "Email already used") {
          setNewUser(null);
          getUserById("APP", APP_ID);
        }
        setNewUser(null);
      });
  };

  const getUserById = async (type, user_id) => {
    axios
      .get(`${BASE_URL}user/${user_id}`, {
        headers: { "app-id": `${APP_ID}` },
      })
      .then((res) => {
        if (type === "APP") {
          setUserById(res);
        } else {
          setPostProfile(res);
        }
      })
      .catch(function (res_error) {
        if (type === "APP") {
          setUserById(null);
        } else {
          setPostProfile(null);
        }
      });
  };

  //Posts
  const getPosts = async () => {
    axios
      .get(`${BASE_URL}post`, {
        params: {
          page: pageNumber,
          limit: limitNumber,
        },
        headers: { "app-id": `${APP_ID}` },
      })
      .then((res) => {
        setListPosts(res);
      })
      .catch(function (res_error) {
        setListPosts(null);
        setError(res_error);
      });
  };

  //comments
  const getCommentsByPost = async (post_id) => {
    axios
      .get(`${BASE_URL}post/${post_id}/comment`, {
        headers: { "app-id": `${APP_ID}` },
      })
      .then((res) => {
        setCommentsByPost(res);
      })
      .catch(function (res_error) {
        setCommentsByPost(null);
      });
  };

  return {
    createUser,
    getUserById,
    getPosts,
    listPosts,
    error,
    infoAuth,
    setInfoAuth,
    newUser,
    setNewUser,
    userById,
    setUserById,
    getCommentsByPost,
    commentsByPost,
    postProfile,
  };
}
