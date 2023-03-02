const Squares = ({ step_size, max_width}) => {
    let number = max_width/step_size;
    const internalSquare = (number) => {
        if (number === 0) return;

        let size = number * step_size;

        return(
            <div
                style={{
                    width: size,
                    height: size,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid black",
                    zIndex: number

                }}
            >
                {internalSquare(number-1)}
            </div>
        )
    }

    return internalSquare(number)

}

export default Squares;