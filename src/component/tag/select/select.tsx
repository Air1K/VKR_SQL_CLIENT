import React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select  from '@mui/material/Select';

const Selected = ({setActive, nameLabel, objMap, ID}) => {


    console.log("Рендер Select ____________________________________")
    return (
        <FormControl variant="standard" sx={{ m: 0, minWidth: "100%" }}>
            <InputLabel id="demo-simple-select-standard-label">{nameLabel}</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                onChange={(e)=>{if(e.target.value !== 0){setActive(e.target.value)} else {setActive(0)}}}
                label="111"
            >
                <MenuItem value={0}>
                    <em>None</em>
                </MenuItem>
                {objMap.map((el, index)=>
                    <MenuItem key={index} value={el[ID]}>{el[ID]}.&nbsp;{el.name}</MenuItem>
                )}
                {/*<MenuItem value={10}>Ten</MenuItem>*/}
                {/*<MenuItem value={20}>Twenty</MenuItem>*/}
                {/*<MenuItem value={30}>Thirty</MenuItem>*/}
            </Select>
        </FormControl>
    );
};

export default Selected;