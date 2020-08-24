import styled from "styled-components";

const LoginWrapper = styled.div`
  /* max-height:36em; */
  width: 70%;
  padding: 4em 5rem;
  font-size: 1.5rem;

  .bg-right {
    background: linear-gradient(360deg, #2655ee 0%, #34b3ff 50%);
    text-align: center;
    max-height: 100vh;
    img {
      margin: 10em auto;
      max-height: 30%;
      /* min-width: 30rem; */
    }
  }

  .formview {
    /* min-height: 20rem; */
    width: 100%;
    background: white;
    box-shadow: 4px 4px 4px lightsteelblue;
    padding: 1rem;
    max-height: 100vh!important;
  }
  form {
    /* margin: 2rem 0em; */
    h5 {
      font-size: 1.8rem;
    }
    /* max-height: 20em; */
    input,
    select {
      font-size: 1.5rem;
      margin: 2.2rem 0rem;
    }
  }
  .btn-info {
    font-size: 1.5rem;
    background: linear-gradient(106deg, #2655ee 0%, #34b3ff 100%);
  }

  .loader {
    position: absolute;
    left: 45%;
    top: 20%;
  }

  @media only screen and (max-width: 768px) {
    /* padding: 0em; */
    /* margin: 9em 0em; */
    display: flex;
    justify-content: center;
    align-items: center;
    .bg-right {
      display: none;
    }
    .formview {
      background: linear-gradient(360deg, #2655ee 0%, #34b3ff 50%);
      border-radius: 10px;
      width: 300px !important;
      margin: 10em 3em;
      padding: 5em 3em;
      height: 38em;
    }
    form {
      /* margin: 4em 2em; */
      width: 80%;
    }
    .row {
      margin-right: 0px !important;
    }
  }
`;

export default LoginWrapper;
