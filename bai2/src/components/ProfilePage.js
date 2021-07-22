import axios from "axios";
import { useEffect, useState } from "react";
import { Spin } from 'antd';
import React from "react";

const ProfilePage = ({ token }) => {
  const [profile, setProfile] = useState({
    name: null,
    id: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`https://60dff0ba6b689e001788c858.mockapi.io/users/${token.id}`)
      .then((res) => {
        setProfile({
          name: res.data.name,
          id: res.data.id,
        });
        setIsLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token.id]);
  return (
    <div>
      {isLoading ? (
        <div style={{ margin: "40px" }}>
          <div>id: {profile.id}</div>
          <div>name: {profile.name}</div>
        </div>
      ) : (
        <Spin size="large" />
      )}
    </div>
  );
};
export default ProfilePage;
