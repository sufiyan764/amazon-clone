import './Header.css';
import { Search, ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

const Header = () => {
    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user){
            auth.signOut();    
        }
    }
    return (  
        <div className="header">
            <Link to="/">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"/>
            </Link>
            <div className="header_search">
                <input
                    className="header_searchInput"
                    type="text"
                />
                <Search className="header_searchIcon"/>
            </div>
            <div className="header_nav">
                <Link to={!user && "/login"}>
                    <div className="header_option" onClick={handleAuthentication}> 
                        <span className="header_optionLineOne">
                        Hello {user? user.email : 'Guest'}
                        </span>
                        <span className="header_optionLineTwo">
                            {user? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
                <Link to={"/orders"}>
                    <div className="header_option">
                        <span className="header_optionLineOne">
                            Returns
                        </span>
                        <span className="header_optionLineTwo">
                            & Orders
                        </span>
                    </div>
                </Link>
                
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Your
                    </span>
                    <span className="header_optionLineTwo">
                        Prime
                    </span>
                </div>
                <Link to="checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasket />
                        <span
                            className="header_optionLineTwo header_basketCount"
                        >{basket?.length}</span>
                    </div>
                </Link>
             </div>
        </div>
    );
}
 
export default Header;