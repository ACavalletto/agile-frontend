import { useState } from "react";
import Role from "../../components/Role/Role";
import UserBio from "../../components/UserBio/UserBio";
import UserInterests from "../../components/UserInterests/UserInterests";
import UserSocials from "../../components/UserSocials/UserSocials";
import NavigationArrows from "../../components/NavigationArrows/NavigationArrows.jsx";

const Onboarding = () => {
  const [page, setPage] = useState(1);
  const [profileData, setprofileData] = useState({
    uid: "",
    name: "",
    role: "",
    city: "",
    bio: "",
    twitter: "",
    github: "",
    linkedin: "",
    portfolio: "",
    interests: [],
    skills: [],
  });

  const onUpdateField = (e) => {
    const nextFormState = {
      ...profileData,
      [e.target.name]: e.target.value,
    };
    setprofileData(nextFormState);
  };

  const onUpdateArray = (e, arr) => {
    const nextFormState = profileData;
    e.target.classList.contains("interests")
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
    //add Put route to backend to update a profile by passing profileData state when button pressed
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
      <>
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
      </>
    );
  }
};

export default Onboarding;
