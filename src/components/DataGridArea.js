import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

const columns = [
    { field: 'id', headerName: '#', width: 90 },
    {
      field: 'record_time',
      headerName: '回報日期',
      width: 150,
      editable: true,
    },
    {
      field: 'reply_time',
      headerName: '受理日期',
      width: 150,
      editable: true,
    },
    {
      field: 'main_category',
      headerName: '主分類',
      type: 'number',
      width: 110,
      editable: false,
    },
    {
      field: 'petition_subject',
      headerName: '問題主旨',
      sortable: false,
      width: 160,
    },
    {
      field: 'satisfaction',
      headerName: '滿意度',
      sortable: true,
      width: 80,
    },
  ];
  
  // const rows = [
  //   { id: 1, applyDate: 'Snow', replyDate: 'Jon', mainCategory: 14 },
  //   { id: 2, applyDate: 'Lannister', replyDate: 'Cersei', mainCategory: 31 },
  //   { id: 3, applyDate: 'Lannister', replyDate: 'Jaime', mainCategory: 31 },
  //   { id: 4, applyDate: 'Stark', replyDate: 'Arya', mainCategory: 11 },
  //   { id: 5, applyDate: 'Targaryen', replyDate: 'Daenerys', mainCategory: null },
  //   { id: 6, applyDate: 'Melisandre', replyDate: null, mainCategory: 150 },
  //   { id: 7, applyDate: 'Clifford', replyDate: 'Ferrara', mainCategory: 44 },
  //   { id: 8, applyDate: 'Frances', replyDate: 'Rossini', mainCategory: 36 },
  //   { id: 9, applyDate: 'Roxie', replyDate: 'Harvey', mainCategory: 65 },
  // ];
  

const DataGridArea = () => {
   const casesTableData = useSelector(state => state.case.value.table_data);
   const [curCases, setCurCases] = useState([]);

   useEffect(() => {
    if(casesTableData !== undefined) {
      setCurCases(casesTableData.map((el, i) =>({
      ...el,
      id: i
     })));
    }
   }, [casesTableData]);
    return (
        <div className="data-grid-area py-[20px]">
            <DataGrid
                rows={curCases}
                columns={columns}
                initialState={{
                pagination: {
                    paginationModel: {
                    pageSize: 5,
                    },
                },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </div>       
    )
}

export { DataGridArea };
