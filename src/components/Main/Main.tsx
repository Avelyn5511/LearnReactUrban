import EventRoad from "../Event/EventRoad.tsx";
import EventRoadFoot from "../Event/EventRoadFooter/EventRoadFoot.tsx";
import AboutMe from "./AboutMe/AboutMe.tsx";
import AskedQuestions from "./AskedQuestions/AskedQuestions.tsx";
import LogoMain from "./Logo/LogoMain.tsx";
import MyPhotoCard from "./MyPhotoCard/MyPhotoCard.tsx";
import MyServices from "./MyServices/MyServices.tsx";
import ReviewsMyClient from "./ReviewsMyClient/ReviewsMyClient.tsx";
import Title from "./Title/Title.tsx";
import TitleSlogan from "./Title/TitleSlogan/TitleSlogan.tsx";

function Main() {
  return (
    <>
      <TitleSlogan />
      <EventRoad />
      <Title />
      <AboutMe />
      <MyServices />
      <MyPhotoCard />
      <AskedQuestions />
      <ReviewsMyClient />
      <LogoMain />
      <EventRoadFoot />
    </>
  );
}

export default Main;
