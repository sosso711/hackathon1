/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import ApiArtists from '../components/ApiArtists';
import Header from '../components/Header';
import ReactPlayer from 'react-player';


const Profil = () => {

    return (
        <>
        <Header name="Artistes" />
        <section className="cardtitle"/>
        <div>
            {ApiArtists
            .map((item) => (
                <div className="pb-20 text-lg border-gray-600 border-2 m-6 p-4 rounded-md shadow-md bg-gray-400" 
                key={item.id}>
                    <img src={item.img} alt="" className="w-100 h-80"/>
                    <div className="text-center"/>
                    {item.name}  <br/>
                    {item.musiquetype} <br/>
                    {item.email} <br/>
                    {item.detail} <br/>
                    {item.objectif} <br/>
                    <ReactPlayer url={item.url} className="react-player" width="100%" height="100%"/>
                    </div>
            ))}
        </div>
            
        </>
    );
};

export default Profil;
