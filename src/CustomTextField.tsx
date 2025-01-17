import React from 'react'
import { useFormikContext } from 'formik'
import { TextField,Box } from '@mui/material';

interface CustomTextFieldProps {
    id: string,
    label: string,
    type: string,
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({ id, label, type }) => {
    const { values, handleChange, touched,errors } = useFormikContext<{[key:string]:string}>();

    return (
        <Box margin="dense">
            <TextField
                sx={{ backgroundColor: 'lightblue' }}
                id={id}
                name={id}
                label={label}
                type={type}
                value={(values as any)[id]|| ''}
                onChange={handleChange}
                error={Boolean(touched?.[id] && errors?.[id])}
                helperText={touched?.[id] && errors?.[id]}
            />
        </Box>
    );
};
export default CustomTextField;