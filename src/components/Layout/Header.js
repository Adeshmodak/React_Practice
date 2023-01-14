import {Fragment} from 'react';

import imagemeals from '../../images/meals.jpg'

import classes from './Header.module.css';

const Headercomp=props=>{
    return (<Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <button>Cart</button>
        </header>
        <div  className={classes['main-image']}>
            <img src ={imagemeals} alt='A delicious food'/>
            
        </div>
      
    </Fragment>);
}

export default Headercomp;