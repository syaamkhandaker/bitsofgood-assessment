import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { deleteUser, editUser, saveUser } from "../api";

export const TableCols = [
  {
    field: "avatar",
    headerName: "Avatar",
    width: 80,
    renderCell: (params) => (
      <img src={params.value} className="rounded-full w-10 h-10" />
    ),
  },
  {
    field: "name",
    headerName: "Name",
    width: 130,
    editMode: "row",
    editable: true,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 170,
    editMode: "row",
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
    editMode: "row",
    editable: true,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 55,
    editMode: "row",
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 60,
    editMode: "row",
    editable: true,
    type: "singleSelect",
    valueOptions: [true, false],
  },
  {
    field: "hero_project",
    headerName: "Hero Project",
    width: 100,
    editMode: "row",
    editable: true,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 110,
    renderCell: (params) => {
      return (
        <div className="flex gap-3">
          <IconButton
            onClick={() => {
              editUser(params);
              window.location.href = "/table";
            }}
          >
            <SaveIcon className="cursor-pointer" />
          </IconButton>
          <IconButton
            onClick={() => {
              deleteUser(params.id);
              window.location.href = "/table";
            }}
          >
            <DeleteIcon className="cursor-pointer" />
          </IconButton>
        </div>
      );
    },
  },
];

export const newEntryTableCols = [
  {
    field: "avatar",
    headerName: "Avatar",
    width: 80,
    editable: true,
  },
  {
    field: "name",
    headerName: "Name",
    width: 130,
    editMode: "row",
    editable: true,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 170,
    editMode: "row",
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
    editMode: "row",
    editable: true,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 55,
    editMode: "row",
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 60,
    editMode: "row",
    editable: true,
    type: "singleSelect",
    valueOptions: ["true", "false"],
  },
  {
    field: "hero_project",
    headerName: "Hero Project",
    width: 100,
    editMode: "row",
    editable: true,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 110,
    renderCell: (params) => {
      return (
        <div className="flex gap-3">
          <IconButton
            onClick={async () => {
              await saveUser(params);
              window.location.href = "/table";
            }}
          >
            <SaveIcon className="cursor-pointer" />
          </IconButton>
          <IconButton
            onClick={() => {
              window.location.href = "/table";
            }}
          >
            <DeleteIcon className="cursor-pointer" />
          </IconButton>
        </div>
      );
    },
  },
];

// 1. `Name`: _the name of the volunteer_
// 2. `Profile Picture`: _an image of the volunteer_
// 3. `Phone`: _the phone number of the volunteer_
// 4. `Email`: _the email address of the volunteer_
// 5. `Rating`: _the rating of the volunteer_ (from 1 - 9)
// 6. `Status`: _whether the volunteer is active or not_
// 7. `Hero Project`: _the name of the project the volunteer is assigned to_
