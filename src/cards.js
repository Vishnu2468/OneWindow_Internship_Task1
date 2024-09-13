import React, { useState } from "react";
import './cards.css';

const CountryCard = ({ country }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div>
            <header className="header">
                <div className="header-left">
                    <span className="logo"><a href="https://onewindow.co/"><img src="https://onewindow.co/wp-content/uploads/2024/07/onewindow-logo.png" alt="One Window Logo" className="logo-img"></img></a></span>
                </div>
                <nav className="header-nav">
                    <a href="https://campusroot.com/explore">Explore</a>
                    <a href="https://campusroot.com/recommendations"><span className="blue-text">AI</span> Course Finder <img src="https://onewindow.co/wp-content/uploads/2024/09/AI-1.png" className="ai-logo"></img></a>
                    <a href="https://onewindow.co/countries/">Countries</a>
                    <a href="https://onewindow.co/scholarship/">Scholarship</a>
                    <a href="https://onewindow.co/contact/">Contact</a>
                </nav>
                <div className="header-right">
                    <a href="https://campusroot.com/?loginp=true"><button className="login-btn">Login</button></a>
                </div>
            </header>
            <div className="country-card">
                <div className="card-header">
                    <div className="card-title">
                        <h2 className="spaced-element">{country.name}</h2>
                        <img src={country.flag} alt={`${country.name} flag`} className="country-flag" />
                    </div>
                    <div className="card-match">
                        <button className="favorite-btn" onClick={handleFavoriteClick}>
                            {isFavorite ? '❤️' : '🤍'}
                        </button>
                    </div>
                </div>

                <div className="card-body">
                    <div className="card-university">
                        <p><strong>Academic Reputation:</strong></p>
                        <p>{country.academic_reputation.university_rankings.QS_World_Ranking}</p>
                        <p>{country.academic_reputation.university_rankings.Times_Higher_Education}</p>
                        <p>{country.academic_reputation.accreditation}</p>
                    </div>

                    <div className="card-info">
                        <p><strong>Tuition Fees:</strong> {country.cost_of_education.tuition_fees}</p>
                        <p><strong>Living Expenses:</strong> {country.living_expenses.cost_of_living}</p>
                    </div>
                </div>

                <div className="card-footer">
                    <p><strong>Total Cost:</strong> ~€20,000 / year</p>
                    <div className="card-options">
                        <span className="featured"><b><a href="https://onewindow.co/contact/">Contact Us</a></b></span>
                        <input type="checkbox" /> Add to compare
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryCard;
