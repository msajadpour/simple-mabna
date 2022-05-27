import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
// styles 
import Styles from "./header.module.scss"

const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
}

const Header:React.FC = () => {
    return (
        <div className={Styles.Header}>
            <div className={Styles.inner}>
                <div className={Styles.title}>
                    <p>لیست دارایی ها</p>
                </div>
                <div className={Styles.search}>
                    <FontAwesomeIcon icon={faSearch}/>
                    <input onChange={handleSearch} type="text" placeholder="جستجوی نام نماد ، نام شرکت"/>
                </div>
            </div>
        </div>
    )
}
export default Header;