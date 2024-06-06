function ThemePropsComponent({ darkTheme }) {
  const styleVal = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
  };
  return (
    <div style={styleVal}>
      <h1>Props Component</h1>
    </div>
  );
}

export default ThemePropsComponent;
