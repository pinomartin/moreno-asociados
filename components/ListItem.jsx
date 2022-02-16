import React from "react";
import styles from "../styles/Home.module.css";
import { Col } from "react-bootstrap";

const ListItem = ({label, cols=6}) => {
  return (
    <Col md={cols} className="mt-1 mb-1">
      <div className={`${styles.services__box} d-flex align-items-center`}>
        <i className={`${styles.services__icons} las la-check`}></i>
        <h3 className={styles.services__box__title}>{label}</h3>
      </div>
    </Col>
  );
};

export default ListItem;
