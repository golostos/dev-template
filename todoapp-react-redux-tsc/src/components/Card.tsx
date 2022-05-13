import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
const useStyles = makeStyles({
    card: {
        border: "0",
        borderRadius: "6px",
        color: "rgba(0, 0, 0, 0.87)",
        background: "#fff",
        width: "100%",
        boxShadow:
            "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: "0",
        wordWrap: "break-word",
        fontSize: ".875rem",
        transition: "all 300ms linear",
    }
});

type CardProps = {
    children: React.ReactNode
    className: string
}
export default function Card(props: CardProps) {
    const classes = useStyles();
    const { className, children, ...rest } = props;
    // const cardClasses = classNames({
    //     [classes.card]: true,
    //     [className]: className !== undefined,
    // });
    return (
        <div className={classes.card + ' ' + className} {...rest}>
            {children}
        </div>
    );
}