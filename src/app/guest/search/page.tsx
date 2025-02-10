import FeaturedProducts from "@/app/components/featurer-products"
import FilterSection from "@/app/components/filter"
import Header from "@/app/components/header"
import { Search, Bell, Grid, ListIcon } from "lucide-react"


export default function Page() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white p-6">
     <Header/>

      {/* Main Content */}
      <div className="flex gap-6">
        {/* Filters */}
        <FilterSection />

        {/* Products */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Products</h1>
            <div className="flex gap-2">
              <button className="p-2 rounded bg-[#2a2a2a] text-gray-400">
                <Grid className="w-5 h-5" />
              </button>
              <button className="p-2 rounded bg-indigo-600">
                <ListIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
          <FeaturedProducts />
        </div>
      </div>
    </div>
  )
}

