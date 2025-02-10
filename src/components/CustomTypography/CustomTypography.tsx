import { Typography, TypographyProps } from "@mui/material";
import React from "react";

interface CustomTypographyExtraProps {
    label: string
}

type CustomTypographyProps = TypographyProps & CustomTypographyExtraProps

export const CustomTypography: React.FC<CustomTypographyProps> = ({ variant = 'h4', color = 'primary.main', fontWeight = 400, label, ...rest }) => {
    return <Typography {...rest} variant={variant} color={color} fontWeight={fontWeight}>{label}</Typography>;
}