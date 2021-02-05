import React from "react";
import InboxDesktopView from "../components/Inbox/InboxDesktopView";
import InboxMobileView from "../components/Inbox/InboxMobileView";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Inbox = () => {
  const { width: deviceScreen } = useWindowDimensions();

  return deviceScreen >= 768 ? <InboxDesktopView /> : <InboxMobileView />;
};

export default Inbox;
