const Translate = ({ value, position, onChange: parentOnChange }) => (
  <div>
      <div>Translate {position}: {value}</div>
          <input
              type="range"
              min="-350"
              max="350"
              value={value}
              onChange={(e) => parentOnChange(e, position)}
          />
  </div>
);

export default Translate;