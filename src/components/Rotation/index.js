const Rotation = ({ value, onChange: parentOnChange }) => (
    <div>
        <div>Rotation Angle: {value}</div>
            <input
                type="range"
                max="360"
                value={value}
                onChange={parentOnChange}
            />
    </div>
);

export default Rotation;