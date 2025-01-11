function Select({ options, value, onChange, type, ...props }) {
  console.log(props);

  const selectStyle = {
    fontSize: "1rem",
    padding: "0.8rem 1.2rem",
    border: `1px solid ${type === "white" ? "#f3f4f6" : "#d1d5db"}`,
    borderRadius: "0 1px 2px rgba(0, 0, 0, 0.04)",
    backgroundColor: "#fff",
    fontWeight: 500,
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04)",
  };

  return (
    <select value={value} onChange={onChange} style={selectStyle} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
