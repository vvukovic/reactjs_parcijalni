import React from 'react';
import PropTypes from 'prop-types';

export default function Results({ data, isFirstLoad, onFormReset }) {
    if(!isFirstLoad) {
        let dataMsg = data.map((item) => item.message); // save message value to consume later

        if(!data || data.length === 0) {
            return 'Nema rezultata';
        }

        if(dataMsg.includes("Not Found") || ((Array.isArray(data.map((item) => item.repos)) && (data.map((item) => item.repos.length) === undefined)))) {
            return 'Nismo pronašli navedeni traženi pojam. Probajte ponovo s drugim pojmom.';
        }
    }

    const handleFormReset = () => {
        onFormReset();
    }

    return (
        <ul>
            {data.map((item, index) => {
                return (
                    <li style={{ listStyleType: 'none' }} key={index}>
                        <p><img src={item.avatarUrl} alt="Github user avatar" /> {item.name}</p>
                        <p style={{ fontWeight: 'bold', display: 'inline-block' }}>BIO:</p><span> {item.bio}</span><br />
                        <p style={{ fontWeight: 'bold', display: 'inline-block' }}>LOCATION:</p><span> {item.location}</span><br />
                        <p style={{ fontWeight: 'bold', display: 'inline-block' }}>REPOSITORIES:</p>
                        <ul>
                            {item.repos.length > 0 && item.repos.map((repo) => {
                                return (
                                    <li style={{ listStyleType: 'none' }} key={repo.id + repo.name}>
                                        <span>{repo.name}</span>
                                    </li>
                                )
                            })}
                        </ul></li>)
            })}<br />
            <button onClick={handleFormReset} type="button">Reset</button>
        </ul>
    )
}

Results.propTypes = {
    data: PropTypes.array
}