import React from 'react';
import { useState } from 'react';
import ImgComponent from '../common/ImgComponent';
import ButtonComponent from '../common/ButtonComponent';


const SearchWordAll = ({ lineClass, zoneClass, type, placeholder, value }) => {

    const [search, setSearch] = useState('');
    const [srchInput, setSrchInput] = useState();
    const [deletor, setDeletor] = useState(false);
    const [button, setButton] = useState(false);

    const writePut = (e) => {
        setSearch(e.target.value);
        setSrchInput(true);
        setDeletor(true);
        setButton(true);
    }
    const onDelete = (e) => {
        setSearch(e.target.value = '');
        setSrchInput(false);
        setDeletor(false);
        setButton(false);
    }

    return (
        <div className={lineClass}>
            <div className={zoneClass}>
                <input type={type} className={srchInput? 'wrput line p-r-32' : 'wrput line'} placeholder={placeholder} value={value} onChange={writePut} />
                <span className={deletor? 'put_check put_delete dflx' : 'put_check put_delete'} onClick={onDelete}>
                    <ImgComponent className={'w12 op06'} src={"close_fill_fff_12.svg"} />
                </span>
            </div>
            <ButtonComponent type={'submit'} txt={'검색'} className={button? 'btn_srch28 word shadow on' : 'btn_srch28 word shadow'} />
            <ButtonComponent type={'submit'} txt={'전체'} className={'btn_srch28 word shadow on'} />
        </div>
    );
    
};

export default SearchWordAll;
