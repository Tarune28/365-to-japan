class MomentUtils {
    static roundUp(momentObj, roundBy) {
        return momentObj.add(1, roundBy).startOf(roundBy);
    }
}

export default MomentUtils;