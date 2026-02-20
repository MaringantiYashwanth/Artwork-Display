import React, { useState, useEffect } from "react";
import {
  DataTable,
  type DataTableSelectionMultipleChangeEvent,
} from "primereact/datatable";
import { Column } from "primereact/column";
import api from "../api/api";
import { Paginator, type PaginatorPageChangeEvent } from "primereact/paginator";

export type Arts = {
  title: string;
  place_of_origin: string;
  artist_display: string;
  inscriptions: string;
  date_start: string;
  date_end: string;
};
export default function Table() {
  const [arts, setArts] = useState<Arts[]>([]);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);
  const [selectedArts, setSelectedArts] = useState<Arts[]>([]);
  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  useEffect(() => {
    const page = first / rows + 1; // first tells how many I skipped,
    // rows will tell how many rows are there in a page.
    api(page).then((result) => {
      setArts(result.data);
      setTotalRecords(result.total);
    });
  }, [first, rows]);
  // useEffect(() => {
  //   api().then((data: Arts[]) => setArts(data));
  // }, []);

  return (
    <div className="card">
      <DataTable
        value={arts}
        tableStyle={{ minWidth: "50rem" }}
        showGridlines
        dataKey="id"
        selectionMode="multiple"
        selection={selectedArts}
        onSelectionChange={(e: DataTableSelectionMultipleChangeEvent<Arts[]>) =>
          setSelectedArts(e.value)
        }
      >
        <Column
          selectionMode="multiple"
          headerStyle={{ width: "5rem" }}
        ></Column>
        <Column field="title" header="title"></Column>
        <Column field="place_of_origin" header="Place Of Origin"></Column>
        <Column field="artist_display" header="Artist Display"></Column>
        <Column field="inscriptions" header="Inscriptions"></Column>
        <Column field="date_start" header="Date Start"></Column>
        <Column field="date_end" header="Date End"></Column>
      </DataTable>
      <Paginator
        first={first}
        rows={rows}
        totalRecords={totalRecords}
        rowsPerPageOptions={[10, 20, 30]}
        onPageChange={onPageChange}
      />
    </div>
  );
}
