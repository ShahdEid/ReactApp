import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const DataGridx=(props)=>{
const rows = [
    { id: 1,  col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 4,  col1: 'MUI', col2: 'is Amazing' },
  ];
  
  const columns = [
    { field: 'AddressID', headerName: 'ID', type: 'number', width: 100 },
    { field: 'AddressLine1', headerName: 'AddressLine1 1', width: 150 },
    { field: 'StateProvince', headerName: 'StateProvince 2', width: 150 },
    { field: 'CountryRegion',   headerName: 'CountryRegion 3', width: 150 },
    { field: 'ModifiedDate',  headerName: 'Column 4', width: 150 },
    
  ];
  
  const theme = createTheme({
    components: {
      // Use `MuiDataGrid` on DataGrid, DataGridPro and DataGridPremium
      MuiDataGrid: {
        styleOverrides: {
          root: {
            backgroundColor: 'LightSalmon',
          },
        },
      },
    },
  });
  const getRowId = (row) => row.AddressID; // Specify how to extract the id from each row

    return (
        <ThemeProvider theme={theme}>
        <div style={{ height: 300, width: '100%' }}>
          <DataGrid getRowId={getRowId}
 rows={props.Data} columns={columns} />
        </div>
      </ThemeProvider>
    );
  
  
};

export default DataGridx;