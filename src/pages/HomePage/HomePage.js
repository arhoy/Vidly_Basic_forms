import React from 'react';
import Movies from '../../components/Movies/Movies';
import Like from '../../components/UI/Like/Like';
import Header from '../../components/Header/Header';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
const HomePage = () => {
    return (
        <React.Fragment>
                <Header/>
                 <main className = "container">
                  <Like
                    liked ={true}
                    color = 'green'
                    onLike = {()=>{console.log('thanks for the likes')}}
                    size = '1x'
                    />
                <h1>My Movie DB</h1>
                <Button color = "success"><Link style = {{color:'white', textDecoration: 'none'}} to = "/movies/new">Add New Movie</Link></Button>
                <Movies/>
                 </main>
     </React.Fragment>
    
    );
};

export default HomePage;