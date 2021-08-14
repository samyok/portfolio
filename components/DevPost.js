import {GenIcon} from "react-icons";

export default function DevPostIcon(props) {
    return GenIcon({
        "tag": "svg",
        "attr": {"viewBox": "0 0 280.3 242"},
        "child": [{
            "tag": "path",
            "attr": {"d": "M133.7,76H118v90h14.7c30.9,0,45.1-18.1,45.1-45C177.8,90.9,164.9,76,133.7,76z"}
        }, {
            "tag": "path",
            "attr": {"d": "M210.2,0H70.1L0,121l70.1,121h140.1l70.1-121L210.2,0z M132.7,195H89V47h45.8c42.1,0,73.3,20.1,73.3,74\n" +
                    "\t\tC208.1,172.8,170.6,195,132.7,195z"}
        }]
    })(props);
}
