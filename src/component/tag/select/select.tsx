import React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select  from '@mui/material/Select';

const Selected = ({setActive, nameLabel, objMap, ID}) => {



    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">{nameLabel}</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                onChange={(e)=>{if(e.target.value !== "none"){setActive(e.target.value)} else {setActive(0)}}}
                label="111"
            >
                <MenuItem value={"none"}>
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