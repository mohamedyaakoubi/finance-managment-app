import '../Styles/Home.css';

export const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-heading">
                Welcome to the Financial Management App
            </h1>
            <img 
                className="home-image"
                src="https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?s=612x612&w=0&k=20&c=HYlIJ1VFfmHPwGkM3DtVIFNLS5ejfMMzEQ81ko534ak=" 
                alt="finance image" 
            />
        </div>
    );
};
