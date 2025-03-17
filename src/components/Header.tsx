import axios from 'axios';
import React, { useState } from 'react';
import styles from '../styles/Header.module.css';
import Card from './Card';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <header className={styles.header}>
                <h1 className={styles.title}>Recipe Finder</h1>
                <div className={styles.searchContainer}>
                    <input type="text" 
                        className={styles.searchBar} 
                        placeholder="Enter ingredients (e.g., chicken, tomato)"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </header>

            <Card searchTerm={searchTerm} />
      </div>
    );
};

export default Header;
