const domBuilder = () => {
  console.warn('Dom builder running');
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
  <div id="main-container">
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div id="store"></div>
    <div id="view"></div>
  </div>`;
};

export default domBuilder;
