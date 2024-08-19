import "../../style/style.css"
import React from "react";

const GitUser = () => {
    return(
        <div className="text-center">
            <h1>Github user</h1>
            <h2>John Doe</h2>
            <img src="../img/Doraemon.png" className="rounded mx-auto d-block w-25" alt="User"></img>
            <p>As we all know. John Doe's identity is unknown. I just wanted to contribute without being known.</p>
            <p>Abonnés : 10</p>
            <p>Abonnements : 0</p>
            <p>Créé le : <time dateTime='2016-06-09T17:14:00Z'></time>2016-06-09T17:14:00Z</p>
            <p>Modifié le : <time dateTime='2021-10-12T05:01:09Z'>2021-10-12T05:01:09Z</time></p>
            <p>URL repositories : 
                <a href='http://api.github.com/users/github-john-doe'>http://api.github.com/users/github-john-doe</a>
            </p>
        </div>
    )
}

export default GitUser;