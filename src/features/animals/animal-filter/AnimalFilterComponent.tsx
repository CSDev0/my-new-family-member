import { FormControl, InputLabel, Select, OutlinedInput, Box, Chip, MenuItem, SelectChangeEvent, Checkbox, ListItemText } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel';
import React, { useMemo } from 'react';

export interface IAnimalFilterProps {
    label: string,
    elements: string[],
    currentValues: string[],
    handleOnChange: (event: SelectChangeEvent<any>) => any,
    handleOnDelete: (event: any, value: string) => any,
}
export default function AnimalFilterComponent(props: IAnimalFilterProps) {
    const { label, elements, currentValues, handleOnChange, handleOnDelete } = props;
    const formattedLabel = useMemo(() => label.replace(' ', '-'), [label]);

    return (
        <FormControl sx={{ width: 1 }}>
            {/* {JSON.stringify(currentValues)} */}
            <InputLabel id={`label-multiple-chip-${formattedLabel}`}>{label}</InputLabel>
            <Select
                labelId={`label-multiple-chip-${formattedLabel}`}
                id={`multiple-chip-${formattedLabel}`}
                multiple
                value={currentValues}
                label={label}
                onChange={handleOnChange}
                renderValue={(selected) => (
                    <div >
                        {(selected as string[]).map((value) => (
                            <Chip
                                size='small'
                                key={value}
                                label={value}
                                clickable
                                deleteIcon={
                                    <CancelIcon
                                        onMouseDown={(event: any) => event.stopPropagation()}
                                    />
                                }
                                onDelete={(e) => handleOnDelete(e, value)}
                            />
                        ))}
                    </div>
                )}

            >
                {elements && elements.map((name) => (
                    <MenuItem key={name} value={name}>
                        <Checkbox checked={currentValues.includes(name)} />
                        <ListItemText primary={name} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}