import React from "react";
import { BsThreeDots, BsCalendar4 } from "react-icons/bs";
import { Avatars } from "../../assets/imports";
import "./integration.css";

const Card = ({ rotate }) => {
  return (
    <div className={`integration__container-card ${rotate && "rotate"}`}>
      <div className="integration__container-card__top">
        <h3>Slack integration</h3>
        <BsThreeDots />
      </div>
      <p className="integration__container-card__desc">
        Statisdaa is a school management solution that offers a personalized
        portal to each type of user,
      </p>
      <div className="integration__container-card__extra">
        <p>Development</p>
        <img src={Avatars} alt="/" />
      </div>
      <div className="gradient-line" />
      <div className="integration__container-card__bottom">
        <p>14</p>
        <p>
          <BsCalendar4 /> 7 feb 2022
        </p>
      </div>
    </div>
  );
};

const Integration = () => {
  return (
    <div className="integration__container section__padding">
      <div className="integration__container-cards">
        <Card />
        <Card rotate={true} />
        <Card />
        <Card />
      </div>
      <div className="integration__container-create">
        <h1 className="integration__container-create__header">
          Create your task
        </h1>
        <p className="integration__container-create__desc">
          Statisdaa is a school management solution that offers a personalized
          portal to each type of user, ensuring that your institution is always
          engaged with teachers, students, and their parents
        </p>

        <div className="integration__container-create__task">
          <h3>Create your task</h3>
        </div>
        <div className="integration__container-create__task">
          <h3>Create your task</h3>
        </div>

        <div className="integration__container-create__bottom">
          <h3>Manage the task easily and clearly</h3>
          <p>
            Statisdaa increases communication between all stakeholders:
            students, teachers, parents and administrative staff, with a
            dedicated web portal for any type of end-user. Keeping your students
            and parents engaged with the academic process is a crucial factor in
            each student&apos;s success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Integration;
