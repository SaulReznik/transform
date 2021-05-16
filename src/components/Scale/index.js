const Scale = ({ value, dimension, onChange: parentOnChange, onMouseUp: parentOnMouseUp }) => (
  <div>
      <div>Scale {dimension}: {value}</div>
          <input
              type="range"
              min="-5"
              max="5"
              value={value}
              onChange={(e) => parentOnChange(e, dimension)}
              onMouseUp={parentOnMouseUp}
          />
  </div>
);

export default Scale;