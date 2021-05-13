function Box(props) {
  const { className, size } = props;
  return (
    <div className={"box {className}"}>
      <p className="name">{size}</p>
    </div>
  );
}

const element = (
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box className="box1" size="Small" />
      <Box className="box2" size="Medium" />
      <Box className="box3" size="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
