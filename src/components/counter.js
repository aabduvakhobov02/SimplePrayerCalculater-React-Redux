import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import styled from "styled-components";

const Counter = ({ counter, inc, dec, res }) => {
  const Title = styled.h1`
    position: absolute;
    top: 6.5vw;
    width: 25%;
  `;
  const Wrapper = styled.div`
    margin-top: 18vw;
    height: 200%;
    position: relative;
    background-color: #6f5b3e;
  `;

  return (
    <div className="d-flex justify-content-center align-items-center text-center">
      <Title>Simple Muslim Prayer Calculator with Redux</Title>
      <Wrapper className="card w-25 mx-auto py-3">
        <div className="card m-4">
          <h1 id="counter">{counter}</h1>
        </div>
        <div>
          <button className="btn bg-danger w-25 text-white m-2" onClick={dec}>
            <i className="fas fa-minus"></i>
          </button>
          <button className="btn bg-warning w-25 text-white m-2" onClick={res}>
            <i className="fa fa-sync-alt"></i>
          </button>
          <button className="btn bg-success w-25 text-white m-2" onClick={inc}>
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </Wrapper>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};

export default connect(mapStateToProps, actions)(Counter);
