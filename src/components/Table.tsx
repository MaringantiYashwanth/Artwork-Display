import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import api from "../api/api";

type Arts = {
  title: string;
  place_of_origin: string;
  artist_display: string;
  inscriptions: string;
  date_start: string;
  date_end: string;
};
export default function Table() {
  const [arts, setArts] = useState<Arts[]>([]);

  useEffect(() => {
    api().then((data: Arts[]) => setArts(data));
  }, []);
  return (
    <div className="card">
      <DataTable value={arts} tableStyle={{ minWidth: "50rem" }}>
        <Column field="title" header="title"></Column>
        <Column field="place_of_origin" header="Place Of Origin"></Column>
        <Column field="artist_display" header="Artist Display"></Column>
        <Column field="inscriptions" header="Inscriptions"></Column>
        <Column field="date_start" header="Date Start"></Column>
        <Column field="date_end" header="Date End"></Column>
      </DataTable>
    </div>
  );
}
