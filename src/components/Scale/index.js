const Scale = ({ value, dimension, onChange: parentOnChange }) => (
  <div>
      <div>Scale {dimension}: {value}</div>
          <input
              type="range"
              min="-5"
              max="5"
              value={value}
              onChange={(e) => parentOnChange(e, dimension)}
          />
  </div>
);

export default Scale;