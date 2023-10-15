import Banner from'./components/Banner'
import TopLiked from './components/TopLiked'
import TopSeller from './components/TopSeller'
// show the Homepage

function Home(){
    return(
        <div>
        <Banner />
       <TopLiked />
       <TopSeller />
       
       </div>
    )


}
export default Home