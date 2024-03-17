import { Avatar } from '@mui/material';
import React from 'react';
import "./Suggestions.css"

const Suggestions = () => {
    return (
        <div className='suggestions'>
            <div className="suggestions__title">Suggestions For You</div>
            <div className="suggesttions__usernames">
                
                <div className="suggestion__username">
                    <div className="username__left">
                    <span className='avatar'>
                        <Avatar>R</Avatar>
                    </span>
                    <div className="username__info">
                        <span className='username'>jvidacak</span>
                        <span className='relation'>New to Instagram</span>
                    </div>
                    </div>

                        <button className='follow__button'>Follow</button>
                    
                </div>
                <div className="suggestion__username">
                    <div className="username__left">
                    <span className='avatar'>
                        <Avatar>R</Avatar>
                    </span>
                    <div className="username__info">
                        <span className='username'>jvidacak</span>
                        <span className='relation'>New to Instagram</span>
                    </div>
                    </div>

                        <button className='follow__button'>Follow</button>
                    
                </div>
                <div className="suggestion__username">
                    <div className="username__left">
                    <span className='avatar'>
                        <Avatar>R</Avatar>
                    </span>
                    <div className="username__info">
                        <span className='username'>jvidacak</span>
                        <span className='relation'>New to Instagram</span>
                    </div>
                    </div>

                        <button className='follow__button'>Follow</button>
                    
                </div>
                <div className="suggestion__username">
                    <div className="username__left">
                    <span className='avatar'>
                        <Avatar>R</Avatar>
                    </span>
                    <div className="username__info">
                        <span className='username'>jvidacak</span>
                        <span className='relation'>New to Instagram</span>
                    </div>
                    </div>

                        <button className='follow__button'>Follow</button>
                    
                </div>
            </div>
        </div>
    );
}

export default Suggestions;
