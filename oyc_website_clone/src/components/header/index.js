export default function Header() {
    return (
        <div class="header-wrap">
            <div class="header-container">
                <div class="header-logo">
                    <a href="#">
                        <img src={process.env.PUBLIC_URL + "/Oceanside_Yacht_Club_Logo_150x79.jpg"} alt="OYC Logo"/>
                    </a>
                </div>
                <div class="header-content">
                    <div class="header-text">Call Us Today 760-722-5751</div>
                </div>
            </div>
            
        </div>
    )
};