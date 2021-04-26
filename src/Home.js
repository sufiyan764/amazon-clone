import './Home.css'
import Product from './Product'

const Home = () => {
    return (  
        <div className="home">
            <div className="home_container">
                <img
                    className="home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Saina/launch/3000x1200_Hero-Tall_JPN._CB655199226_.jpg"
                    alt="home"
                />
                <div className="home_row">
                    <Product 
                        title="The lean startup"
                        image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        price = {19.99}
                        rating = {3}
                    />
                    <Product 
                        title="The lean startup"
                        image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        price = {19.99}
                        rating = {3}
                    />
                </div>
                <div className="home_row">
                    <Product 
                        title="The lean startup"
                        image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        price = {19.99}
                        rating = {3}
                    />
                    <Product 
                        title="The lean startup"
                        image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        price = {19.99}
                        rating = {3}
                    />
                    <Product 
                        title="The lean startup"
                        image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        price = {19.99}
                        rating = {3}
                    />
                </div>
                <div className="home_row">
                    <Product 
                        title="The lean startup"
                        image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        price = {19.99}
                        rating = {3}
                    />
                </div>
            </div>
        </div>
    );
}
 
export default Home;