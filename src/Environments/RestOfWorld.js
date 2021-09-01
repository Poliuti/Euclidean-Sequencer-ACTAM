import RestOfTheWorldContextProvider, { RestOfTheWorldContext } from "../Contexts/RestOfTheWorld/RestOfTheWorldContext";
import EuclideanSequencer from "../EuclideanSequencer";

const RestOfTheWorld = () => {
  return (
    <div className="rest-of-the-world">
    <h1>Rest Of The World</h1>
      <RestOfTheWorldContextProvider>
        <EuclideanSequencer context={RestOfTheWorldContext} />
      </RestOfTheWorldContextProvider>
    </div>
  );
};

export default RestOfTheWorld;