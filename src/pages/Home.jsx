import Header from "../component/Header";
import SearchBar from "../component/SearchBar";
import Banner from "../component/Banner";
import ServiceGrid from "../component/ServiceGrid";
import Bottomnav from "../component/Bottomnav";
import PlanetCard from "../component/PlanetCard";

function Home() {
  return (
    <div className="min-h-screen bg-[#F6E9E3] flex justify-center">

      {/* Mobile Container */}
      <div className="w-full max-w-[430px] bg-[#FDE8E4] min-h-screen relative shadow-xl overflow-hidden">

        {/* Scrollable Content */}
        <div className="pb-24 overflow-y-auto">

          {/* Header */}
          <Header />

          {/* Search */}
          <div className="px-5 mt-5">
            <SearchBar />
          </div>

          {/* Banner */}
          <div className="mt-5">
            <Banner />
          </div>

          {/* Services */}
          <div className="px-5 mt-6">
            <ServiceGrid />
          </div>


          {/* Planet Cards */}
          <div className="px-5 mt-6 space-y-5">

            <PlanetCard
              title="Mercury Transit"
              description="Discover transit, retrograde of planet Mercury..."
              image="/mercury.png"
              bgColor="bg-purple-200"
            />


            <PlanetCard
              title="Rahu Ketu Transit"
              description="Discuss Rahu Ketu transit..."
              image="/rahu.png"
              bgColor="bg-cyan-100"
            />

          </div>


        </div>


        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px]">
          <Bottomnav />
        </div>


      </div>

    </div>
  );
}

export default Home;