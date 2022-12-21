import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from 'react-router-dom';
import TableRepo from "../components/TableRepo";
import '../css/Details.css';

import { fetchDataUserDetails, fetchDataUserRepos } from "../services/requests";
function Details () {
    const [userDetails, setUserDetails] = useState([]);
    const [userRepos, setUserRepos] = useState(undefined);
    const { username } = useParams();

    useEffect(() => {
        fetchDataUserDetails(username).then((data) => setUserDetails(data));
    }, [])

    useEffect(() => {
        fetchDataUserRepos(username).then((data) => setUserRepos(data));
    }, [])

    console.log(userDetails);
    return(
    <div>
      <Header />
        <main className="main-details">
           <div className="photo">
           <img
            alt="github user" 
            src={ userDetails?.avatar_url}
            />
           </div>
            <div className="details">
            <h2>Id: {userDetails?.id}</h2>
            <h2>Login: {userDetails?.login}</h2>
            <h2>Profile URL: {userDetails?.html_url}</h2>
            <h2>Date Created: {userDetails?.created_at}</h2>
            </div>
            <br></br>
        <TableRepo 
        data={userRepos}
        />
        </main>
    </div>
    )
}

export default Details;
