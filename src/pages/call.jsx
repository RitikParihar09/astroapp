import CallHeader from "../component/CallHeader";
import CallSearchBar from "../component/CallSearchBar";
import CategoryTabs from "../component/CategoryTabs";
import AstrologerCard from "../component/AstrologerCard";
import Bottomnav from "../component/Bottomnav";
function Call() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center">
      <div className="w-[430px] h-screen bg-white overflow-y-auto">

   <CallHeader />

<CallSearchBar />

<CategoryTabs />

<div className="px-4 py-4 space-y-5 pb-24">
  <AstrologerCard />
  <AstrologerCard />
  <AstrologerCard />
  <AstrologerCard />
</div>

<Bottomnav />

      </div>
    </div>
  );
}

export default Call;