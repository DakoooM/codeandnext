import useDocument from "@/hooks/useDocument";
import { useGlobalState } from "@/hooks/useGlobalState";
import { useModal } from "@/hooks/useModal";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { GrFormClose } from "react-icons/gr";
import { SignupPage, LoginPage } from "../Auth";

const modalElements = {
  "signup": {
    title: "Inscription",
    component: <SignupPage />
  },
  "login": {
    title: "Connexion",
    component: <LoginPage />
  }
};

function Modal({ closable = true }) {
  const { show } = useModal();
  const [showModal] = useGlobalState("showModal");
  const [modalContent] = useGlobalState("modalContent");
  const documentObj = useDocument();
  const onClose = () => closable ? show(false) : undefined;

  useEffect(() => {
    if (!showModal) {
      function afterClose() {
        document.body.style.overflow = "auto";
      }
      
      const timeout = setTimeout(afterClose, 300);

      return () => clearTimeout(timeout);
    }

    document.body.style.overflow = "hidden";
  }, [showModal]);

  const modalCtn = (
    <div className={showModal ? "Modal_container show" : "Modal_container"}>
      <div className="modal-overlay" onClick={onClose}></div>

      <div className="Modal">
        <div className="modal-header">
          <span className="modal-title">{modalElements[modalContent].title}</span>
          {closable ? (
            <span className="modal-close" onClick={onClose}>
              <GrFormClose />
            </span>
          ) : undefined}
        </div>

        <div className="modal-body">
          {modalElements[modalContent].component}
        </div>
      </div>
    </div>
  );

  return documentObj ? createPortal(modalCtn, documentObj.body) : undefined;
}

export default Modal;