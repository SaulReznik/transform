const Translate = ({ value, position, onChange: parentOnChange, onMouseUp: parentOnMouseUp }) => (
  <div>
      <div>Translate {position}: {value}</div>
          <input
              type="range"
              min="-350"
              max="350"
              value={value}
              onChange={(e) => parentOnChange(e, position)}
              onMouseUp={parentOnMouseUp}
          />
  </div>
);

export default Translate;