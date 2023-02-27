import { useState } from "react";
import {
  getLoggedInUserProfile,
  updateProfile,
} from "../../utilities/profiles-api";
import Role from "../../components/Role/Role";
import UserBio from "../../components/UserBio/UserBio";
import UserInterests from "../../components/UserInterests/UserInterests";
import UserSocials from "../../components/UserSocials/UserSocials";
import NavigationArrows from "../../components/NavigationArrows/NavigationArrows.jsx";

const Onboarding = ({ user, URL }) => {
  const [page, setPage] = useState(1);
  const [profileData, setprofileData] = useState({
    name: "",
    photo: "",
    role: "",
    city: "",
    bio: "",
    twitter: "",
    github: "",
    linkedin: "",
    portfolio: "",
    interests: [],
    tech: [],
  });
  async function newUser() {
    const profileId = await getLoggedInUserProfile(user.uid);
    const response = await updateProfile(profileId._id, profileData);
    console.log(profileId._id);
  }

  const onUpdateField = (e) => {
    const nextFormState = {
      ...profileData,
      [e.target.name]: e.target.value,
    };
    setprofileData(nextFormState);
  };

  const onUpdateArray = (property, arr) => {
    const nextFormState = { ...profileData };
    property === "interests"
      ? (nextFormState.interests = arr)
      : (nextFormState.skills = arr);
    setprofileData(nextFormState);
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      const nextFormState = {
        ...profileData,
        [e.target.name]: e.target.value,
      };
      setprofileData(nextFormState);
    } else {
      const nextFormState = {
        ...profileData,
        [e.target.name]: "",
      };
      setprofileData(nextFormState);
    }
  };

  const handleSubmit = () => {
    newUser();
  };

  const nextPage = () => {
    if (page === 4) {
      return;
    }
    setPage(page + 1);
  };
  const previousPage = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };
  if (page === 1) {
    return (
      <>
        <Role
          handleCheckboxChange={handleCheckboxChange}
          onUpdateField={onUpdateField}
          profileData={profileData}
        />
        <NavigationArrows
          page={page}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </>
    );
  } else if (page === 2) {
    return (
      <>
        <UserBio onUpdateField={onUpdateField} profileData={profileData} />
        <NavigationArrows
          page={page}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </>
    );
  } else if (page === 3) {
    return (
      <>
        <UserSocials onUpdateField={onUpdateField} profileData={profileData} />
        <NavigationArrows
          page={page}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </>
    );
  } else {
    return (
      <div className="container">
        <div className="col">
          <UserInterests
            onUpdateArray={onUpdateArray}
            profileData={profileData}
          />
          <NavigationArrows
            page={page}
            nextPage={nextPage}
            previousPage={previousPage}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    );
  }
};

export default Onboarding;
