import { Fragment, useContext } from "react";
import Context from "../context/context";
import ContactForm from "../components/sections/ContactForm";
import SocialIcon from "../components/SocialIcon";
import Chatbot from "../components/Chatbot";
const ContentSidebar = () => {
  const { sidebar, changeSideBar } = useContext(Context);

  return (
    <Fragment>
      <div
        className="s_overlay"
        style={{ display: sidebar ? "block" : "none" }}
      />
      <div className={`content-sidebar ${sidebar ? "active" : ""}`}>
        <div className="sidebar-wrap search-form">
          <aside id="secondary" className="widget-area">
            <Chatbot />
          </aside>
        </div>
        <span className="close" onClick={() => changeSideBar(false)} />
      </div>
    </Fragment>
  );
};
export default ContentSidebar;
