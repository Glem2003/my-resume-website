//component
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

const Home = () => {
    return (
        <>
            <Header 
                title="My Resume"
                lists={['Home', 'About', 'Contact']}
                logoLink="https://github.com/Glem2003"
                linkTarget={"_blank"}
            />
            <Footer />
        </>
    )
}

export default Home;