import FirstPage from "../FirstPage/FirstPage";
import About from "../About/About";
import Function from "../Function/Function";
import Footer from "../Footer/Footer";
import './WrapPage.css';

function WrapPage({isLogined}) {
    return(
        <div>
            <FirstPage isLogined={isLogined} />
            <About />
            <Function />
            <Footer />
        </div>
    );
}

export default WrapPage;