"use client";
import React, { useEffect, useState } from "react";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interaction from "@fullcalendar/interaction";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
  Modal,
  Row,
  Col,
} from "reactstrap";

// Sample events
const initialEvents = [
  { title: "Mohamed Light vs. TRB Wallace", start: "2024-06-07", id: 1 },
  { title: "Guriko vs. CAL Sub", start: "2024-06-08", id: 2 },
  { title: "Vitor75 vs. SandBox", start: "2024-06-09", id: 3 },
];

let calendar;

export const Bet = () => {
  const [events, setEvents] = useState(initialEvents);
  const [modalAdd, setModalAdd] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    createCalendar();
  }, []);

  const createCalendar = () => {
    calendar = new Calendar(document.getElementById("calendar"), {
      plugins: [interaction, dayGridPlugin],
      defaultView: "dayGridMonth",
      selectable: true,
      selectHelper: true,
      editable: false,
      events,
      eventClick: ({ event }) => {
        setSelectedEvent(event);
      },
    });
    calendar.render();
    setCurrentDate(calendar.view.title);
  };

  return (
    <main
      style={{
        backgroundImage: "url(/background4.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        backgroundColor: "rgba(0,0,0, 0.80)",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "2%",
      }}
    >
      <Card
        className="card-calendar p-2"
        style={{
          width: "80%",
          margin: "0 auto",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "20px",
          padding: "20px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
        }}
      >
        <CardHeader className="bg-info">
          <Row className="align-items-center py-4">
            <Col className="mt-3 mt-lg-0 text-lg-right" lg="6">
              <Button
                className="fullcalendar-btn-prev btn-neutral"
                color="default"
                onClick={() => {
                  calendar.next();
                  setCurrentDate(calendar.view.title);
                }}
                size="sm"
              >
                <i className="fas fa-angle-left" />
              </Button>
              <Button
                className="fullcalendar-btn-next btn-neutral"
                color="default"
                onClick={() => {
                  calendar.prev();
                  setCurrentDate(calendar.view.title);
                }}
                size="sm"
              >
                <i className="fas fa-angle-right" />
              </Button>
            </Col>
          </Row>
        </CardHeader>
        <CardBody className="p-0">
          <div className="calendar" id="calendar" />
        </CardBody>
      </Card>
      <Modal
        isOpen={modalAdd}
        toggle={() => setModalAdd(false)}
        className="modal-dialog-centered modal-secondary"
      ></Modal>
      {selectedEvent && (
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "20px",
            padding: "20px",
            margin: "20px 0",
            fontFamily: "Arial, sans-serif",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "1.5em",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            <span style={{ color: "#003366" }}>
              {selectedEvent.title.split(" vs. ")[0]}
            </span>{" "}
            vs.{" "}
            <span style={{ color: "#003366" }}>
              {selectedEvent.title.split(" vs. ")[1]}
            </span>
          </h3>
          <button
            style={{
              backgroundColor: "#0077CC",
              color: "white",
              padding: "15px 32px",
              fontSize: "16px",
              margin: "4px 2px",
              cursor: "pointer",
            }}
          >
            Over +3.0
          </button>
          <button
            style={{
              backgroundColor: "#0077CC",
              color: "white",
              padding: "15px 32px",
              fontSize: "16px",
              margin: "4px 2px",
              cursor: "pointer",
            }}
          >
            Under -4.5
          </button>
          <a
            href="#"
            style={{
              color: "#0077CC",
              textDecoration: "none",
              display: "block",
              marginTop: "10px",
            }}
          >
            Learn more about {selectedEvent.title.split(" vs. ")[0]}
          </a>
          <a
            href="#"
            style={{
              color: "#0077CC",
              textDecoration: "none",
              display: "block",
              marginTop: "10px",
            }}
          >
            Learn more about {selectedEvent.title.split(" vs. ")[1]}
          </a>
        </div>
      )}
      <p style={{ color: "white", fontSize: "1.2em" }}>
        Note: Betting is only allowed for adults aged 19+. Please gamble
        responsibly.{" "}
        <a
          href="https://www.canada.ca/en/health-canada/services/substance-use/get-help-with-substance-use.html"
          style={{ color: "#0077CC" }}
        >
          Link to Substance Abuse Help
        </a>
      </p>
    </main>
  );
};

export default Bet;
