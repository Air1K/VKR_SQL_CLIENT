import React, {useContext} from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select  from '@mui/material/Select';
import searchRouteDb from '../../hooks/hooks-search-route-db'
import {Context} from "../../../index";
const Selected = ({active, setActive, nameLabel, objMap, ID}) => {
    const {store} = useContext(Context);

    console.log("Рендер Select ____________________________________")
    return (
        <FormControl variant="standard" sx={{ m: 0, minWidth: "100%" }}>
            <InputLabel id="demo-simple-select-standard-label">{nameLabel}</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                onChange={(e)=>{console.log(e.target.value, "((((("); setActive(e.target.value)
                    store.setRouteActive(searchRouteDb(e.target.value, store.idGraph, store.matrixsmesh, store.Routes));

                }}
                defaultValue={active}
                label="111"
            >
                <MenuItem value={null}>
                    <em>None</em>
                </MenuItem>
                {objMap.map((el, index)=>
                    <MenuItem key={index} value={index}>{el[ID]}.&nbsp;{el.name}</MenuItem>
                )}
            </Select>
        </FormControl>
    );
};

export default Selected;