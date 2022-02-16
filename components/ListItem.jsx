import React from "react";
import styles from "../styles/Home.module.css";
import { Col } from "react-bootstrap";

const ListItem = ({ label, cols = 6 }) => {
  return (
    <Col md={cols} className="mt-1 mb-1">
      <div
        className={`${styles.listItem__container} d-flex align-items-center`}
      >
        <i className={`${styles.listItem__icons} las la-check`}></i>
        <h3 className={styles.listItem__label}>{label}</h3>
      </div>
    </Col>
  );
};

export default ListItem;
