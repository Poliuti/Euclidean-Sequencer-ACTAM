import EnvironmentContextProvider from "./../Contexts/EnvironmentContext";
import EuclideanSequencer from "./../Components/SequencerElements/EuclideanSequencer";

const RestOfTheWorld = () => {
  return (
    <div className="rest-of-the-world">
      <h1>Rest Of The World</h1>
      <EnvironmentContextProvider name={"restOfTheWorld"} num={5}>
        <EuclideanSequencer />
      </EnvironmentContextProvider>
    </div>
  );
};

export default RestOfTheWorld;
