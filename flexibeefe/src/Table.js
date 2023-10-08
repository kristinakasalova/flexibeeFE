import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ObjednavkaTable = ({ objednavkaData }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Kód</TableCell>
                        <TableCell>SumCelkem</TableCell>
                        <TableCell>KontaktJmeno</TableCell>
                        {/* Include other table headers as needed */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {objednavkaData.map((objednavka, index) => (
                        <TableRow key={index}>
                            <TableCell>{objednavka.kod}</TableCell>
                            <TableCell>{objednavka.sumCelkem}</TableCell>
                            <TableCell>{objednavka.kontaktJmeno}</TableCell>
                            {/* Include other table cells as needed */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ObjednavkaTable;
