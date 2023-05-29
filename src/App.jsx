import React from "react";
import { Client } from "@hubspot/api-client";

const App = () => {
  const hubspotClient = new Client({
    accessToken: "pat-na1-59d2b73e-340a-4a01-900c-fd62cc975dc6",
    basePath: "https://react-hub-api.vercel.app/",
  });

  const allContacts = hubspotClient.crm.contacts.getAll();

  allContacts
    .then((res) => {
      const contacts = res.json();
    })
    .then((data) => {
      console.log(data.body);
    })
    .catch((err) => {
      console.log(err);
    });

  return <div>App React</div>;
};

export default App;
