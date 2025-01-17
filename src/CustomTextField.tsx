import React from 'react'
import { useFormikContext } from 'formik'
import { TextField,Box } from '@mui/material';
import { string } from 'yup';

interface CustomTextFieldProps {
    id: string,
    label: string,
    type: string
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({ id, label, type }) => {
    const { values, handleChange } = useFormikContext();

    return (
        <Box margin="dense">
            <TextField
                sx={{ backgroundColor: 'lightblue' }}
                id={id}
                name={id}
                label={label}
                type={type}
                // value={values[id]}
                onChange={handleChange}
            />
        </Box>
    );
};

export default CustomTextField;
