import React from "react";
import { Outlet, Link, useLoaderData, Form,  redirect, } from "react-router-dom";
import { getContacts, createContact } from "../contacts";
import ContactType from "src/type/ContactType";

export async function action(): Promise<{ contact: ContactType }> {
  const contact = await createContact();
  return { contact };
}

export async function loader(): Promise<any> {
  const contact = await getContacts();
  return redirect(`/contacts/${contact.id}/edit`);
}

const Root = () => {
  const { contacts } = useLoaderData() as { contacts: ContactType[] };
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link to={`contacts/${contact.id}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
