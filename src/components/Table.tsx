import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import PropTypes from "prop-types";
import api from "../api/api";

export default function Table({
  title,
  place_of_origin,
  artist_display,
  inscriptions,
  date_start,
  date_end,
}) {
  const [arts, setArts] = useState([]);

  useEffect(() => {}, []);
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
Table.propTypes = {
  title: PropTypes.string.isRequired,
  place_of_origin: PropTypes.string,
  artist_display: PropTypes.string,
  inscriptions: PropTypes.string,
  date_start: PropTypes.string,
  date_end: PropTypes.string,
};
