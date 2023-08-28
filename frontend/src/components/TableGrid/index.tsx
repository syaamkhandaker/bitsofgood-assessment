import { DataGrid, GridToolbarContainer } from "@mui/x-data-grid";
import { TableCols, newEntryTableCols } from "../../utils/constants";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  data: any;
};

export default function TableGrid({ data }: Props) {
  const navigate = useNavigate();
  const [isNewEntry, setIsNewEntry] = useState(false);

  const newEntry = [
    {
      name: "",
      avatar: "",
      hero_project: "",
      notes: "",
      email: "",
      phone: "",
      rating: "",
      status: false,
      id: data.length + 1,
    },
  ];

  const handleClick = () => {
    setIsNewEntry(!isNewEntry);
  };

  const handleRowSelection = (event: any) => {
    navigate(`/table/user?id=${event.id}`);
  };

  return (
    <div className="m-10">
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
      {isNewEntry && (
        <DataGrid
          rows={newEntry}
          columns={newEntryTableCols}
          checkboxSelection
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          className=""
        />
      )}
      <DataGrid
        rows={data}
        columns={TableCols}
        checkboxSelection
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        disableRowSelectionOnClick={true}
        onRowClick={handleRowSelection}
        className="cursor-pointer"
      />
    </div>
  );
}