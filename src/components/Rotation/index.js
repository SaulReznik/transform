const Rotation = ({ value, onChange: parentOnChange, onMouseUp: parentOnMouseUp }) => (
    <div>
        <div>Rotation Angle: {value}</div>
            <input
                type="range"
                max="360"
                value={value}
                onChange={parentOnChange}
                onMouseUp={parentOnMouseUp}
            />
    </div>
);

export default Rotation;