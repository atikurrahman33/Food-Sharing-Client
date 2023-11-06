import Banner from "../Banner/Banner";
import DirectMessage from "../DirectMessage/DirectMessage";
import Foods from "../FoodCard/Foods";
import TeamMember from "../TeamMember/TeamMember";
import FAQ from "./FAQ/FAQ";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Foods></Foods>
            <TeamMember></TeamMember>
            <FAQ></FAQ>
            <DirectMessage></DirectMessage>
            
        </div>
    );
};

export default Home;