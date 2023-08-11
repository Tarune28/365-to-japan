import { Moment } from "moment";

class MomentUtils {
    static roundUp(momentObj: Moment, roundBy: moment.unitOfTime.DurationConstructor) {
        return momentObj.add(1, roundBy).startOf(roundBy);
    }
}

export default MomentUtils;