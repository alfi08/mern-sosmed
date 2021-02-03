import React from "react";

import NotifItem from "./NotifItem";

const NotificationItems = (props) => {
  return (
    <>
      {[1, 2].map((item, i) => (
        <NotifItem
          key={item}
          border={i !== 0 ? "1px" : "0"}
          from={{
            profileImage: "https://picsum.photos/200/300",
            username: "alfi08",
          }}
          type="FOLLOW"
        />
      ))}
    </>
  );
};

export default NotificationItems;
