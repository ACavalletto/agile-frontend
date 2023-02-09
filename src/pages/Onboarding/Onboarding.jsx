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
        <Role setprofileData={setprofileData} />
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
        <UserBio setprofileData={setprofileData} />
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
        <UserSocials setprofileData={setprofileData} />
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
        <UserInterests setprofileData={setprofileData} />
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
