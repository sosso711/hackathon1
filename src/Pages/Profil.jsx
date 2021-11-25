/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import ApiArtists from '../components/ApiArtists';


const Profil = () => {

    return (
        <>
        <section className="cardtitle"/>
        <div>
            {ApiArtists
            .map((item) => (
                <div className="pb-20 text-lg border-gray-600 border-2 m-6 p-4 rounded-md shadow-md" 
                key={item.id}>
                    {item.name} <br/>
                    {item.musiquetype} <br/>
                    {item.email}
                    <img src={item.img} alt=""/>
                    {item.detail} <br/>
                    {item.objectif} <br/>
                    </div>
            ))}
        </div>
            
        </>
    );
};

export default Profil;
