import React, { useEffect, useState } from "react";
import { useGlobalApp } from "../context/GlobalContextApp";
import { v4 as uuidv4 } from "uuid";
import "./Home.css";
import Modal from "../modal/Modal";

function Home() {
  const {
    createUser,
    getUserById,
    getPosts,
    infoAuth,
    listPosts,
    newUser,
    userById,
  } = useGlobalApp();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalType, setModalType] = useState("");
  const [searchTags, setSearchTags] = useState('');

  useEffect(() => {
    const userCreatedInfo = JSON.parse(localStorage.getItem(infoAuth?.email));
    if (userCreatedInfo) {
      console.log("primero", userCreatedInfo)
      getUserById("APP", userCreatedInfo?.id);
    } else {
      console.log("segundo")
      createUser();
    }
    getPosts();
  }, []);

  function openModal(type, content = null) {
    setModalContent(content);
    setModalVisible(true);
    setModalType(type);
  }

  function closeModal() {
    setModalVisible(false);
    setModalContent(null);
  }

  function handleSearchTagsChange(event) {
    setSearchTags(event.target.value);
  }

  const filteredPosts = listPosts?.data?.data.filter((post) => {
    if (!searchTags) {
      return true;
    }
    const userTags = searchTags.split(',').map((tag) => tag.trim());
    return userTags.some((userTag) => post.tags.includes(userTag));
  });

  return (
    <div>
      <header>
        <div className="containerHeader">
          <div className="logoCompany">
            <h1>TitaM</h1>
          </div>
          <div className="user-auth">
            <div className="user-name">
              <span>Nombre:</span>
              <span>
                {newUser
                  ? newUser?.data?.data?.firstName
                  : userById?.data?.firstName}
              </span>
            </div>
            <div className="user-lastname">
              <span>Apellido:</span>
              <span>
                {newUser
                  ? newUser?.data?.data?.lastName
                  : userById?.data?.lastName}
              </span>
            </div>
            <div className="user-email">
              <span>Email:</span>
              <span>
                {newUser ? newUser?.data?.data?.email : userById?.data?.email}
              </span>
            </div>
          </div>
        </div>
      </header>
      <main>
        <Modal
          visible={modalVisible}
          content={modalContent}
          onClose={closeModal}
          type={modalType}
        />
        <h2 className="posts-name">Posts</h2>
        <section>
          <div className="container-tags">
            <span>Filtra por tags:</span>
            <input
              type="text"
              placeholder="Ingrese los tags (separados por comas)"
              value={searchTags}
              onChange={handleSearchTagsChange}
            />
          </div>
          {listPosts ? (
            <div className="ContainerPosts">
              {filteredPosts?.map((post) => {
                return (
                  <div className="post" key={uuidv4()}>
                    <div
                      className="user-info"
                      onClick={() => openModal("profile", post)}
                    >
                      <img
                        src={post?.owner?.picture}
                        alt={`${post?.owner?.firstName} ${post?.owner?.lastName}`}
                      />
                      <span>{`${post?.owner?.firstName} ${post?.owner?.lastName}`}</span>
                    </div>
                    <div className="post-image">
                      <img src={post.image} alt="Imagen del Post" />
                    </div>
                    <p>{post.text}</p>
                    <div className="tags">
                      {post.tags.map((tag) => (
                        <span key={uuidv4()}>#{tag}</span>
                      ))}
                    </div>
                    <div className="likes-comments">
                      <span>{post.likes} Likes</span>
                      <span
                        className="see-comments"
                        onClick={() => openModal("comments", post)}
                      >
                        ver comentarios
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null}
        </section>
      </main>
    </div>
  );
}

export default Home;
