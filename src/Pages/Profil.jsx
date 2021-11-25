import React from 'react';
import ApiArtists from '../components/ApiArtists';

const Profil = () => {
    
    return (
        <>
        <div className="container" />
        <div>
            {ApiArtists.firstname}
            {ApiArtists.lastname}
            {ApiArtists.musiquetype}
            {ApiArtists.emai}
            {ApiArtists.img}
            {ApiArtists.detail}
            {ApiArtists.objectif}
        </div>
            
        </>
    );
};

export default Profil;