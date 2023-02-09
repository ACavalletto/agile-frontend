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
    skills: [],
  });

  const onUpdateField = (e) => {
    const nextFormState = {
      ...profileData,
      [e.target.name]: e.target.value,
    };
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
  }

  const nextPage = () => {
    if (page === 5) {
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
        <Role handleCheckboxChange={handleCheckboxChange} onUpdateField = {onUpdateField} />
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
        <UserBio onUpdateField={onUpdateField} />
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
        <UserSocials onUpdateField={onUpdateField} />
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
        <UserInterests onUpdateField={onUpdateField} />
        <NavigationArrows
          page={page}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </>
    );
  }
};

export default Onboarding;
