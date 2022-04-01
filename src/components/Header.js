import Brand from './Brand';
import SearchBox from './SearchBox';
function Header() {
    let handleSearch = () => {
        console.log("This search box is not functional");
    }
    return <div className="flex flex-start header align-center">
        <Brand />
        <SearchBox handleSearch={handleSearch}/>
    </div>
}
export default Header;