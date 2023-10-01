import React, { useEffect } from "react";
import { useGlobalApp } from "../context/GlobalContextApp";
import "./Modal.css";
import { v4 as uuidv4 } from "uuid";

function Modal({ visible, content, onClose, type }) {
  const { getCommentsByPost, commentsByPost, getUserById, postProfile } =
    useGlobalApp();

  useEffect(() => {
    if (type === "comments" && content) {
      getCommentsByPost(content?.id);
    } else {
      getUserById("profilePost", content?.owner?.id);
    }
  }, [type, content]);

  return (
    visible && (
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="container-button">
            <button onClick={onClose} className="close-button">
              Cerrar
            </button>
          </div>

          {type === "comments" && commentsByPost?.data?.data ? (
            <div className="comment-list">
              {commentsByPost?.data?.data.map((comment) => {
                return (
                  <div className="comment-card" key={uuidv4()}>
                    <div className="user-info">
                      <img
                        src={comment?.owner?.picture}
                        alt={`${comment?.owner?.firstName} ${comment?.owner?.lastName}`}
                      />
                      <span>{`${comment?.owner?.firstName} ${comment?.owner?.lastName}`}</span>
                    </div>
                    <div>
                      <p>{comment?.message}</p>
                      <span>{comment?.publishDate}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null}
          {type === "profile" && postProfile?.data ? (
            <div className="user-auth">
              <div>
                <div className="user-img">
                  <img
                    src={postProfile?.data?.picture}
                    alt={`${postProfile?.data?.firstName} ${postProfile?.data?.lastName}`}
                  />
                  <span>{`${postProfile?.data?.firstName} ${postProfile?.data?.lastName}`}</span>
                  <div className="user-email">
                    <span>Email:</span>
                    <span>{postProfile?.data?.email}</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="user-sex">
                  <span>Sexo:</span>
                  <span>{postProfile?.data?.gender}</span>
                </div>
                <div className="user-phone">
                  <span>Teléfono:</span>
                  <span>{postProfile?.data?.phone}</span>
                </div>
              </div>
              <div>
                <div className="user-city">
                  <span>Ciudad:</span>
                  <span>{postProfile?.data?.location?.city}</span>
                </div>
                <div className="user-country">
                  <span>País:</span>
                  <span>{postProfile?.data?.location?.country}</span>
                </div>
                <div className="user-state">
                  <span>Estado/Departamento:</span>
                  <span>{postProfile?.data?.location?.state}</span>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    )
  );
}

export default Modal;
