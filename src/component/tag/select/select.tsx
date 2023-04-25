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
                onChange={(e)=>{console.log(e.target.value, "((((("); setActive(e.target.value)}}
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