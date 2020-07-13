import React from 'react';

export default function Results({ data }) {

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
                            {item.repos.map((repo) => {
                                return (
                                    <li style={{ listStyleType: 'none' }} key={repo.id + repo.name}>
                                        <span>{repo.name}</span>
                                    </li>
                                )
                            })}
                        </ul></li>)
            })}<br />
        </ul>
    )
}