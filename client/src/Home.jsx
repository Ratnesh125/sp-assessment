import Card1 from "./Cards"
export default function Home(){
    return(
        <div className="flex">
            <div class="w-1/5 h-screen bg-gray-500 "></div>
            <div class="w-3/5 h-screen bg-gray-800 "></div>
            <div class="w-1/3 bg-gray-50">
                <Card1  />
            </div>
        </div>
    )
}